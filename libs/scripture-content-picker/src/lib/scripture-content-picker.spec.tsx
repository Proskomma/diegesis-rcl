import { render } from '@testing-library/react';

import ScriptureContentPicker from './scripture-content-picker';

describe('ScriptureContentPicker', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ScriptureContentPicker />);
    expect(baseElement).toBeTruthy();
  });
});
