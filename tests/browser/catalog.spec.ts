import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/tests/browser/');
});

test('native form values, multiselect, radio and file submission work', async ({
  page,
}) => {
  await page.getByLabel('Username', { exact: true }).fill('New author');
  await page.getByLabel('Role', { exact: true }).selectOption('author');
  await page
    .getByLabel('Topics', { exact: true })
    .selectOption(['ui', 'tests']);
  await page.getByLabel('Note', { exact: true }).fill('Complete');
  await page.getByRole('checkbox', { name: 'Subscribe to updates' }).uncheck();
  await page.getByRole('radio', { name: 'Pro plan' }).check();
  await page.getByTestId('catalog-file').setInputFiles({
    name: 'notes.txt',
    mimeType: 'text/plain',
    buffer: Buffer.from('notes'),
  });
  await expect(page.getByText('notes.txt', { exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Submit catalog form' }).click();
  await expect(page.getByTestId('catalog-submitted')).toHaveText(
    JSON.stringify({
      username: 'New author',
      role: 'author',
      topics: ['ui', 'tests'],
      subscribe: false,
      plan: 'pro',
      note: 'Complete',
      filename: 'notes.txt',
    }),
  );
  await expect(page.getByTestId('catalog-disabled-file')).toBeDisabled();
  await expect(page.locator('#catalog-disabled-file-wrapper')).toHaveAttribute(
    'aria-disabled',
    'true',
  );
});

test('compound control refs and image refs reach their native DOM nodes', async ({
  page,
}) => {
  const image = page.getByRole('img', { name: 'Color sample' });
  expect(
    await image.evaluate(
      (element) => getComputedStyle(element.parentElement!).marginTop,
    ),
  ).toBe('16px');
  await expect(image).toHaveCSS('margin-top', '0px');
  for (const [name, target] of [
    ['Focus catalog input', page.getByLabel('Username', { exact: true })],
    ['Focus catalog select', page.getByLabel('Role', { exact: true })],
    ['Focus catalog textarea', page.getByLabel('Note', { exact: true })],
    ['Focus catalog file', page.getByTestId('catalog-file')],
    ['Focus catalog image', page.getByRole('img', { name: 'Color sample' })],
  ] as const) {
    await page.getByRole('button', { name, exact: true }).click();
    await expect(target).toBeFocused();
  }
});

test('pagination and tag actions preserve native semantics', async ({
  page,
}) => {
  const previous = page
    .getByRole('navigation', { name: 'Catalog pages' })
    .getByRole('link', { name: 'Previous page' });
  await previous.evaluate((element: HTMLElement) => element.click());
  await expect(page.getByTestId('catalog-disabled-clicks')).toHaveText('0');
  await expect(page).not.toHaveURL(/blocked/);
  await expect(previous).toHaveAttribute('tabindex', '-1');
  await expect(
    page
      .getByRole('navigation', { name: 'Catalog pages' })
      .getByRole('link', { name: '2', exact: true }),
  ).toHaveAttribute('aria-current', 'page');
  await page.getByRole('button', { name: 'Remove example tag' }).click();
  await expect(page.getByTestId('catalog-removable-tag')).toHaveCount(0);
  await expect(page.getByTestId('catalog-heading')).toHaveJSProperty(
    'tagName',
    'H3',
  );
});

test('columns follow viewport width and fixed grids follow container width', async ({
  page,
}) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  const grid = page.locator('#catalog-fixed-inner');
  const columns = () =>
    grid.evaluate(
      (element) =>
        getComputedStyle(element).gridTemplateColumns.split(' ').length,
    );
  await expect.poll(columns).toBe(2);
  await page.getByTestId('catalog-fixed').evaluate((element) => {
    element.style.width = '1100px';
  });
  await expect.poll(columns).toBe(3);
  await page.getByTestId('catalog-fixed').evaluate((element) => {
    element.style.width = '600px';
  });
  await expect.poll(columns).toBe(1);
  await expect(page.getByTestId('catalog-smart')).toHaveCSS('gap', '16px');
  const widths = await page
    .getByTestId('catalog-column')
    .evaluate((element) => [
      element.getBoundingClientRect().width,
      element.parentElement!.getBoundingClientRect().width,
    ]);
  expect(widths[0]! / widths[1]!).toBeCloseTo(1 / 3, 2);
  await page.setViewportSize({ width: 375, height: 812 });
  const mobile = await page
    .getByTestId('catalog-column')
    .evaluate((element) => [
      element.getBoundingClientRect().width,
      element.parentElement!.getBoundingClientRect().width,
    ]);
  expect(mobile[0]! / mobile[1]!).toBeCloseTo(1, 2);
});

test('scoped dark theme changes surfaces without changing the host page', async ({
  page,
}) => {
  const root = page.getByTestId('catalog-root');
  const background = await root.evaluate(
    (element) => getComputedStyle(element).backgroundColor,
  );
  await page.getByRole('button', { name: 'Toggle catalog theme' }).click();
  await expect(root).not.toHaveCSS('background-color', background);
  await expect(root).toHaveCSS('color-scheme', 'dark');
  await expect(page.getByTestId('outside')).toHaveCSS(
    'background-color',
    'rgb(123, 45, 67)',
  );
});

test('loading links cannot activate through keyboard or native clicks', async ({
  page,
}) => {
  const link = page.getByRole('link', { name: 'Loading link', exact: true });
  await link.focus();
  await page.keyboard.press('Enter');
  await link.evaluate((element: HTMLElement) => element.click());
  await expect(page.getByTestId('catalog-link-clicks')).toHaveText('0');
  await expect(page).not.toHaveURL(/loading-link/);
  await expect(link).toHaveAttribute('aria-disabled', 'true');
  await expect(link).toHaveAttribute('tabindex', '-1');
  await page.getByRole('link', { name: 'Enabled link', exact: true }).focus();
  await page.keyboard.press('Enter');
  await expect(page.getByTestId('catalog-link-clicks')).toHaveText('1');
  await expect(page).toHaveURL(/enabled-link/);
});

test('file keyboard focus has a visible indicator', async ({ page }) => {
  const file = page.getByTestId('catalog-file');
  await file.focus();
  await page.keyboard.press('Tab');
  await page.keyboard.press('Shift+Tab');
  await expect(file).toBeFocused();
  expect(
    await file.evaluate(
      (element) =>
        getComputedStyle(element.parentElement!.querySelector('.rb-file-cta')!)
          .outlineStyle,
    ),
  ).toBe('solid');
});

test('nested scopes preserve plain text styles regardless of outer prefix', async ({
  page,
}) => {
  await expect(page.getByTestId('catalog-nested-link')).toHaveCSS(
    'color',
    'rgb(11, 22, 33)',
  );
  await expect(page.getByTestId('catalog-nested-code')).toHaveCSS(
    'color',
    'rgb(44, 55, 66)',
  );
  await expect(page.getByTestId('catalog-nested-strong')).toHaveCSS(
    'color',
    'rgb(77, 88, 99)',
  );
  const reserved = page.getByTestId('catalog-reserved-grid');
  await expect(reserved).toHaveClass(/is-is-auto-fill/);
  expect(
    await reserved.evaluate(
      (element) =>
        getComputedStyle(element).gridTemplateColumns.split(' ').length,
    ),
  ).toBeGreaterThan(1);
});

test('upward menu positions its popup without collapsed geometry', async ({
  page,
}) => {
  const trigger = page.getByRole('button', {
    name: 'Open upward menu',
    exact: true,
  });
  await trigger.evaluate((element) => {
    element.parentElement!.style.marginInlineStart = '300px';
  });
  await trigger.click();
  const popup = page.getByTestId('catalog-up-popup');
  await expect(popup).toBeVisible();
  await expect
    .poll(
      async () =>
        (await page.getByTestId('catalog-up-positioner').boundingBox())!.height,
    )
    .toBeGreaterThan(20);
  await expect
    .poll(async () => {
      const bounds = (await popup.boundingBox())!;
      return bounds.y + bounds.height - (await trigger.boundingBox())!.y;
    })
    .toBeLessThanOrEqual(1);
  await expect
    .poll(async () => {
      const bounds = (await popup.boundingBox())!;
      const anchor = (await trigger.boundingBox())!;
      return Math.abs(bounds.x + bounds.width - anchor.x - anchor.width);
    })
    .toBeLessThanOrEqual(1);
});

test('system theme follows the browser color scheme', async ({ page }) => {
  await page
    .getByRole('button', { name: 'Follow system theme', exact: true })
    .click();
  const root = page.getByTestId('catalog-root');
  await page.emulateMedia({ colorScheme: 'dark' });
  await expect(root).toHaveCSS('color-scheme', 'dark');
  await page.emulateMedia({ colorScheme: 'light' });
  await expect(root).toHaveCSS('color-scheme', 'light');
});
