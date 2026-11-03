import { buildStyles } from '../src/styles';
import { customConfig } from '../tests/browser/custom-config';

await Bun.write(
  new URL('../.generated/default.css', import.meta.url),
  await buildStyles(),
);
await Bun.write(
  new URL('../.generated/custom.css', import.meta.url),
  await buildStyles(customConfig),
);
await Bun.write(
  new URL('../.generated/reserved-prefix.css', import.meta.url),
  await buildStyles({ prefix: 'is-' }),
);
