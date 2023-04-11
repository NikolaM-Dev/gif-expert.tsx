import { render, screen } from '@testing-library/react';

import { GifGrid } from '../../src/components';

describe('Tests on <GifGrid />', () => {
  const category = 'Dragon Ball Z';

  it('should to match with snapshot', () => {
    const { container } = render(<GifGrid category={category} />);

    expect(container).toMatchSnapshot();
  });

  it('should to show initial loading', () => {
    render(<GifGrid category={category} />);

    expect(screen.getByText('Is Loading...')).toBeTruthy();
    expect(screen.getByText(category)).toBeTruthy();
  });
});
