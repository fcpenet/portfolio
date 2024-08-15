import { render } from '@testing-library/react';

import MainRoutes from './mainRoutes';

describe('Routes', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MainRoutes />);
    expect(baseElement).toBeTruthy();
  });
});
