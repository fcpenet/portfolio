import { render } from '@testing-library/react';

import FloatingNavigation from './floating-navigation';

describe('FloatingNavigation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FloatingNavigation />);
    expect(baseElement).toBeTruthy();
  });
});
