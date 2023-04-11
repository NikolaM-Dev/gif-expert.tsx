import { render, screen } from '@testing-library/react';

import { GifGrid } from '../../src/components';
import { IGif } from '../../src/models';
import { useFetchGifs } from '../../src/hooks';

jest.mock('../../src/hooks/useFetchGifs');

describe('Tests on <GifGrid />', () => {
  const category = 'Dragon Ball Z';

  it('should to match with snapshot', () => {
    (useFetchGifs as jest.Mock).mockReturnValue({
      gifs: [],
      isLoading: true,
    });

    const { container } = render(<GifGrid category={category} />);

    expect(container).toMatchSnapshot();
  });

  it('should to show initial loading', () => {
    (useFetchGifs as jest.Mock).mockReturnValue({
      gifs: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);

    expect(screen.getByText('Is Loading...')).toBeTruthy();
    expect(screen.getByText(category)).toBeTruthy();
  });
});
