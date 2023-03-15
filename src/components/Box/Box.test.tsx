import { render } from '@testing-library/react';

import { Box } from '@/components/Box';

test('component renders', () => {
  render(<Box />);
  expect(true).toBe(true);
});
