import { buildStyles } from '../src/styles';

await Bun.write(
  new URL('../dist/styles.css', import.meta.url),
  await buildStyles(),
);
