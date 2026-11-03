import { createRef } from 'react';
import {
  Button,
  BulmaRoot,
  createBulma,
  helpers,
  type Helpers,
} from '../../src';
import { buildStyles } from '../../src/styles';

const custom = createBulma({ prefix: 'my-ui-' });
const values: Helpers = {
  mt: 0,
  mx: 'auto',
  p: 6,
  textAlign: 'center',
  hidden: 'tablet-only',
  display: 'flex',
  justifyContent: 'space-between',
};
helpers(values);
buildStyles({ prefix: 'my-ui-' });
<custom.BulmaRoot ref={createRef<HTMLDivElement>()}>
  <custom.Button
    ref={createRef<HTMLButtonElement>()}
    onClick={(event) => event.currentTarget.focus()}
    helpers={values}
    type="submit"
    aria-label="Save"
  />
</custom.BulmaRoot>;
// @ts-expect-error Spacing is a Bulma scale, not arbitrary CSS.
helpers({ mt: 7 });
// @ts-expect-error Padding has no auto value.
helpers({ p: 'auto' });
// @ts-expect-error Alignments use semantic names.
helpers({ textAlign: 'centered' });
// @ts-expect-error Only supported Bulma breakpoints are accepted.
helpers({ hidden: 'phone' });
// @ts-expect-error Prefix configuration is a string.
createBulma({ prefix: 5 });
// @ts-expect-error Button sizes are closed.
<Button size="huge" />;
// @ts-expect-error Button always renders a native button.
<Button as="a" />;
// @ts-expect-error Helpers are grouped, not native DOM properties.
<Button mt={4} />;
// @ts-expect-error Ref must point to a div.
<BulmaRoot ref={createRef<HTMLButtonElement>()} />;
