import '@testing-library/jest-dom';

import { toMatchRenderedSnapshot } from './rendered-snapshot';

expect.extend({
  toMatchRenderedSnapshot,
});
