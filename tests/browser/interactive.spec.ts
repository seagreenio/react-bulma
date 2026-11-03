import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/tests/browser/');
});

test('dropdown supports keyboard navigation, disabled items, selection and focus restoration', async ({
  page,
}) => {
  const trigger = page.getByRole('button', { name: 'Choose action' });
  await expect(trigger).toHaveAttribute('data-ref-target', 'dropdown-trigger');
  await trigger.focus();
  await page.keyboard.press('ArrowDown');
  await expect(page.getByRole('menu')).toBeVisible();
  await expect(
    page.getByRole('menuitem', { name: 'First action' }),
  ).toBeFocused();
  await page.keyboard.press('ArrowDown');
  await expect(
    page.getByRole('menuitem', { name: 'Disabled action' }),
  ).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.getByTestId('interactive-selection')).toHaveText('None');
  await page.keyboard.press('ArrowDown');
  await expect(
    page.getByRole('menuitem', { name: 'Last action' }),
  ).toBeFocused();
  await page.keyboard.press('Home');
  await expect(
    page.getByRole('menuitem', { name: 'First action' }),
  ).toBeFocused();
  await page.keyboard.press('End');
  await expect(
    page.getByRole('menuitem', { name: 'Disabled link' }),
  ).toBeFocused();
  await page.keyboard.press('ArrowUp');
  await expect(
    page.getByRole('menuitem', { name: 'Last action' }),
  ).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.getByTestId('interactive-selection')).toHaveText('Last');
  await expect(page.getByRole('menu')).toBeHidden();
  await expect(trigger).toBeFocused();
  await trigger.click();
  await page
    .getByRole('menuitem', { name: 'Disabled link' })
    .evaluate((element: HTMLElement) => element.click());
  await expect(page.getByTestId('interactive-selection')).toHaveText('Last');
  await expect(page).not.toHaveURL(/interactive-target/);
  await page.keyboard.press('Escape');
  await expect(trigger).toBeFocused();
  await trigger.click();
  await page.getByTestId('interactive-outside').click();
  await expect(page.getByRole('menu')).toBeHidden();
});

test('tabs maintain selection, disabled nonactivation and panel relationships', async ({
  page,
}) => {
  const first = page.getByRole('tab', { name: 'First tab' });
  const last = page.getByRole('tab', { name: 'Last tab' });
  await expect(
    page.getByRole('tablist', { name: 'Example sections' }),
  ).toBeVisible();
  await first.focus();
  await page.keyboard.press('ArrowRight');
  const disabled = page.getByRole('tab', { name: 'Disabled tab' });
  await expect(disabled).toBeFocused();
  await expect(disabled).toHaveAttribute('aria-disabled', 'true');
  await page.keyboard.press('Enter');
  await expect(first).toHaveAttribute('aria-selected', 'true');
  await page.keyboard.press('ArrowRight');
  await expect(last).toBeFocused();
  await expect(first).toHaveAttribute('aria-selected', 'true');
  await page.keyboard.press('Enter');
  await expect(last).toHaveAttribute('aria-selected', 'true');
  await expect(page.getByRole('tabpanel', { name: 'Last tab' })).toHaveText(
    'Last panel',
  );
  await expect(page.getByText('First panel', { exact: true })).toBeHidden();
  await page.keyboard.press('Home');
  await expect(first).toBeFocused();
  await page.keyboard.press('End');
  await expect(last).toBeFocused();
});

test('modal traps focus, preserves live local theme and restores its trigger', async ({
  page,
}) => {
  const trigger = page.getByRole('button', { name: 'Open themed dialog' });
  await trigger.click();
  const dialog = page.getByRole('dialog', {
    name: 'Themed dialog',
    exact: true,
  });
  await expect(dialog).toBeVisible();
  await expect(dialog).toHaveAttribute('data-ref-target', 'modal-card');
  expect(
    await dialog.evaluate(
      (element) =>
        element.closest('[data-testid="interactive-custom-root"]') !== null,
    ),
  ).toBe(true);
  await expect(dialog).toHaveAttribute('aria-describedby', /.+/);
  await expect(
    page.getByRole('button', { name: 'Outside interactive control' }),
  ).toHaveCount(0);
  await expect(
    page.getByRole('button', { name: 'Close themed dialog' }),
  ).toBeFocused();
  for (let i = 0; i < 7; i++) {
    await page.keyboard.press('Tab');
    await expect
      .poll(() =>
        dialog.evaluate((element) => element.contains(document.activeElement)),
      )
      .toBe(true);
  }
  const body = page.getByTestId('interactive-modal-body');
  const before = await body.evaluate(
    (element) => getComputedStyle(element).backgroundColor,
  );
  await page.getByTestId('interactive-custom-root').evaluate((element) => {
    element.style.setProperty('--acme-scheme-main-l', '60%');
  });
  await expect(body).not.toHaveCSS('background-color', before);
  await expect(page.locator('body')).toHaveCSS('overflow', 'hidden');
  await page.keyboard.press('Escape');
  await expect(dialog).toBeHidden();
  await expect(trigger).toBeFocused();
  await expect(page.locator('body')).not.toHaveCSS('overflow', 'hidden');
});

test('nested modal closes and restores focus within its parent', async ({
  page,
}) => {
  await page.getByRole('button', { name: 'Open themed dialog' }).click();
  const nestedTrigger = page.getByRole('button', {
    name: 'Open nested dialog',
  });
  await nestedTrigger.click();
  await expect(
    page.getByRole('dialog', { name: 'Nested dialog', exact: true }),
  ).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(
    page.getByRole('dialog', { name: 'Nested dialog', exact: true }),
  ).toBeHidden();
  await expect(
    page.getByRole('dialog', { name: 'Themed dialog', exact: true }),
  ).toBeVisible();
  await expect(nestedTrigger).toBeFocused();
});

test('default-open modal and dismissal policy work', async ({ page }) => {
  await page.getByRole('button', { name: 'Mount default-open dialog' }).click();
  await expect(
    page.getByRole('dialog', { name: 'Initially open dialog' }),
  ).toBeVisible();
  await page.getByRole('button', { name: 'Close initially open' }).click();
  await page.getByRole('button', { name: 'Open protected dialog' }).click();
  const protectedDialog = page.getByRole('dialog', {
    name: 'Protected dialog',
  });
  await page.keyboard.press('Escape');
  await expect(protectedDialog).toBeVisible();
  await page
    .locator('.rb-modal-background')
    .click({ position: { x: 5, y: 5 } });
  await expect(protectedDialog).toBeVisible();
  await page.getByRole('button', { name: 'Confirm protected dialog' }).click();
  await expect(protectedDialog).toBeHidden();
  await page.getByRole('button', { name: 'Open themed dialog' }).click();
  await page
    .locator('.acme-modal-background')
    .click({ position: { x: 5, y: 5 } });
  await expect(
    page.getByRole('dialog', { name: 'Themed dialog', exact: true }),
  ).toBeHidden();
});

test('mobile navbar exposes disclosure relationships and Escape restoration', async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 812 });
  const burger = page.getByRole('button', { name: 'Toggle navigation' });
  const menu = page.getByTestId('interactive-navbar-menu');
  await expect(menu).toBeHidden();
  await expect(burger).toHaveAttribute(
    'aria-controls',
    (await menu.getAttribute('id')) as string,
  );
  await burger.click();
  await expect(menu).toBeVisible();
  await expect(burger).toHaveAttribute('aria-expanded', 'true');
  await page.getByRole('link', { name: 'Overview link' }).focus();
  await page.keyboard.press('Escape');
  await expect(menu).toBeHidden();
  await expect(burger).toBeFocused();
  await burger.click();
  await page.getByText('More navigation', { exact: true }).focus();
  await page.keyboard.press('Enter');
  await expect(page.getByRole('link', { name: 'Guide link' })).toBeVisible();
  await page.getByRole('link', { name: 'Guide link' }).focus();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('link', { name: 'Guide link' })).toBeHidden();
  await expect(
    page.getByText('More navigation', { exact: true }),
  ).toBeFocused();
  await expect(menu).toBeVisible();
});

test('default-open custom dropdown retains its root and live theme', async ({
  page,
}) => {
  await page.getByRole('button', { name: 'Mount initially open menu' }).click();
  const menu = page.getByTestId('interactive-initial-menu');
  await expect(menu).toBeVisible();
  await expect(menu).toHaveAttribute('role', 'menu');
  expect(
    await menu.evaluate(
      (element) =>
        element.closest('[data-testid="interactive-custom-dropdown"]') !== null,
    ),
  ).toBe(true);
  const before = await menu.evaluate(
    (element) => getComputedStyle(element).backgroundColor,
  );
  await page.getByTestId('interactive-custom-root').evaluate((element) => {
    element.style.setProperty('--acme-scheme-main-l', '55%');
  });
  await expect(menu).not.toHaveCSS('background-color', before);
  await page.getByRole('menuitem', { name: 'Confirm initial action' }).click();
  await expect(menu).toBeHidden();
});
