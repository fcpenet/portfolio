import { render } from '@testing-library/react';

import DigitalResume from './digital-resume';

describe('DigitalResume', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DigitalResume />);
    expect(baseElement).toBeTruthy();
  });
});
