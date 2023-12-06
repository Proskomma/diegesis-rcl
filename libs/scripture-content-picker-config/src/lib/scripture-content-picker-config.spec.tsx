import { render } from '@testing-library/react';

import ScriptureContentPickerConfig from './scripture-content-picker-config';

describe('ScriptureContentPickerConfig', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ScriptureContentPickerConfig />);
    expect(baseElement).toBeTruthy();
  });
});
