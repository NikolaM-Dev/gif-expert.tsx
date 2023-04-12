import { render } from '@testing-library/react';

import { GifExpertApp } from '../src/GifExpertApp';

describe('Tests on <GifExpertApp />', () => {
  it('should to match with snapshot', () => {
    const { container } = render(<GifExpertApp />);

    expect(container).toMatchSnapshot();
  });
});
