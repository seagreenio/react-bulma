import { describe, expect, test } from 'bun:test';
import { renderToStaticMarkup } from 'react-dom/server';
import { Button, BulmaRoot, createBulma, helpers } from '../../src';
import { buildStyles } from '../../src/styles';

describe('prefix configuration', () => {
  test.each(['', 'Acme-', '1ui-', 'ui', 'my--ui-', 'my_ui-', 'a-;', 'a-\n'])(
    'rejects %j in runtime and styles',
    async (prefix) => {
      expect(() => createBulma({ prefix })).toThrow(TypeError);
      await expect(buildStyles({ prefix })).rejects.toThrow(TypeError);
    },
  );

  test('binds a copy of the prefix and freezes the public instance', () => {
    const config = { prefix: 'first-' };
    const first = createBulma(config);
    config.prefix = 'second-';
    const second = createBulma(config);
    expect(Object.isFrozen(first)).toBe(true);
    expect(first.helpers({ mt: 4 })).toBe('first-mt-4');
    expect(second.helpers({ mt: 4 })).toBe('second-mt-4');
    expect(helpers({ mt: 4 })).toBe('rb-mt-4');
    expect(
      renderToStaticMarkup(
        <first.BulmaRoot>
          <first.Button>First</first.Button>
        </first.BulmaRoot>,
      ),
    ).toContain('class="first-button"');
  });
});

test('helpers preserve zero, omit false, and use Bulma semantic spellings', () => {
  expect(
    helpers({ mt: 0, mx: 'auto', textAlign: 'center', hidden: false }),
  ).toBe('rb-mt-0 rb-mx-auto rb-has-text-centered');
  expect(helpers({ textAlign: 'justify', hidden: 'mobile' })).toBe(
    'rb-has-text-justified rb-is-hidden-mobile',
  );
  expect(helpers({ hidden: true })).toBe('rb-is-hidden');
  expect(helpers()).toBe('');
});

test('Button renders native attributes and consumes its style props', () => {
  const html = renderToStaticMarkup(
    <Button
      id="save"
      name="action"
      value="save"
      color="primary"
      size="small"
      rounded
      outlined={false}
      helpers={{ mt: 0, hidden: false }}
      className="business  button"
    >
      Save
    </Button>,
  );
  for (const attribute of [
    'id="save"',
    'name="action"',
    'value="save"',
    'type="button"',
  ])
    expect(html).toContain(attribute);
  expect(html).toContain(
    'class="rb-button rb-is-primary rb-is-small rb-is-rounded rb-mt-0 business  button"',
  );
  expect(html).toContain('>Save</button>');
  expect(html).not.toMatch(/\s(?:color|size|rounded|outlined|helpers)=/);
});

test('loading overrides disabled=false and aria-busy=false without removing native submit behavior', () => {
  const html = renderToStaticMarkup(
    <Button loading disabled={false} aria-busy={false} type="submit">
      Save
    </Button>,
  );
  expect(html).toContain('disabled=""');
  expect(html).toContain('aria-busy="true"');
  expect(html).toContain('type="submit"');
  expect(html).toContain('rb-is-loading');
  expect(
    renderToStaticMarkup(
      <Button loading={false} disabled aria-busy="false">
        Save
      </Button>,
    ),
  ).toContain('aria-busy="false"');
});

test('BulmaRoot renders native properties and consumes helpers', () => {
  const html = renderToStaticMarkup(
    <BulmaRoot
      id="root"
      title="Application"
      helpers={{ p: 4 }}
      className="business"
    >
      Content
    </BulmaRoot>,
  );
  expect(html).toContain('class="rb-root rb-p-4 business"');
  expect(html).toContain('title="Application"');
  expect(html).toContain('id="root"');
  expect(html).toContain('>Content</div>');
  expect(html).not.toContain(' helpers=');
});
