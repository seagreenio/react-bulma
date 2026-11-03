import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/tests/browser/');
});

test('both prefixes render, zero spacing survives, and host styles stay intact', async ({
  page,
}) => {
  const first = page.getByTestId('default');
  const custom = page.getByTestId('custom');
  await expect(first).toHaveCSS('display', 'inline-flex');
  await expect(first).toHaveCSS('height', '40px');
  await expect(first).toHaveCSS('margin-top', '0px');
  await expect(custom).toHaveCSS('height', '40px');
  await expect(custom).toHaveCSS('margin-top', '0px');
  await expect(page.getByTestId('custom-root')).toHaveCSS('margin-top', '16px');
  await expect(page.getByTestId('custom-root')).toHaveCSS(
    'display',
    'inline-block',
  );
  await expect(page.getByTestId('default-root')).toHaveCSS('padding', '16px');
  const background = await first.evaluate(
    (element) => getComputedStyle(element).backgroundColor,
  );
  expect(background).not.toBe('rgba(0, 0, 0, 0)');
  await expect(custom).toHaveCSS('background-color', background);
  await expect(page.getByTestId('centered')).toHaveCSS('text-align', 'center');
  await expect(page.getByTestId('outside')).toHaveCSS('margin-top', '13px');
  await expect(page.getByTestId('outside')).toHaveCSS(
    'background-color',
    'rgb(123, 45, 67)',
  );
  await expect(page.getByTestId('outside')).toHaveCSS('padding', '3px');
  await expect(page.getByTestId('outside-text')).toHaveCSS(
    'font-family',
    'serif',
  );
  await page.getByTestId('default-root').evaluate((element) => {
    element.style.setProperty('--rb-primary-h', '120');
  });
  await expect(first).not.toHaveCSS('background-color', background);
  await expect(custom).toHaveCSS('background-color', background);
});

test('responsive helpers follow the Bulma breakpoint', async ({ page }) => {
  await expect(page.getByTestId('hidden-mobile')).toBeVisible();
  await page.setViewportSize({ width: 375, height: 812 });
  await expect(page.getByTestId('hidden-mobile')).toBeHidden();
  await expect(page.getByTestId('outside')).toBeVisible();
});

test('native refs focus the rendered elements', async ({ page }) => {
  await page
    .getByRole('button', { name: 'Focus button ref', exact: true })
    .click();
  await expect(page.getByTestId('focus')).toBeFocused();
  await page
    .getByRole('button', { name: 'Focus root ref', exact: true })
    .click();
  await expect(page.getByTestId('default-root')).toBeFocused();
});

test('loading blocks repeated pointer, keyboard, and native click activation', async ({
  page,
}) => {
  const button = page.getByTestId('loading');
  await button.focus();
  await page.keyboard.press('Enter');
  await expect(button).toBeDisabled();
  await expect(button).toHaveAttribute('aria-busy', 'true');
  await expect(page.getByTestId('clicks')).toHaveText('1');
  await button.evaluate((element: HTMLButtonElement) => element.click());
  const bounds = await button.boundingBox();
  await page.mouse.click(
    bounds!.x + bounds!.width / 2,
    bounds!.y + bounds!.height / 2,
  );
  await page.keyboard.press('Enter');
  await page.keyboard.press('Space');
  await expect(page.getByTestId('clicks')).toHaveText('1');
  expect(
    await button.evaluate(
      (element) => getComputedStyle(element, '::after').animationName,
    ),
  ).toBe('rb-spinAround');
  await page
    .getByRole('button', { name: 'Finish loading', exact: true })
    .click();
  await expect(button).toBeEnabled();
  await button.click();
  await expect(page.getByTestId('clicks')).toHaveText('2');
});
