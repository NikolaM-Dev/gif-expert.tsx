import { render, screen } from '@testing-library/react';

import { GifGrid } from '../../src/components';
import { IGif } from '../../src/models';
import { useFetchGifs } from '../../src/hooks';

jest.mock('../../src/hooks/useFetchGifs');

describe('Tests on <GifGrid />', () => {
  const category = 'Dragon Ball Z';
  const gifs: IGif[] = [
    {
      id: 'gwx8M5dU53PtS',
      title: 'dragon ball z GIF',
      url: 'https://media2.giphy.com/media/gwx8M5dU53PtS/giphy.gif?cid=6eaa0c54fkrf4938t5p98tzd5560l9qo0b3jb5jrxcpwt5wp&rid=giphy.gif&ct=g',
    },
    {
      id: 'ixYRj3H9HOzWE',
      title: 'dragon ball z GIF',
      url: 'https://media1.giphy.com/media/ixYRj3H9HOzWE/giphy.gif?cid=6eaa0c54fkrf4938t5p98tzd5560l9qo0b3jb5jrxcpwt5wp&rid=giphy.gif&ct=g',
    },
    {
      id: 'pz1s2IpdQh86k',
      title: 'dragon ball z GIF',
      url: 'https://media1.giphy.com/media/pz1s2IpdQh86k/giphy.gif?cid=6eaa0c54fkrf4938t5p98tzd5560l9qo0b3jb5jrxcpwt5wp&rid=giphy.gif&ct=g',
    },
  ];

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

  it('should to show gif items when load gifs from useFetchGifs', () => {
    (useFetchGifs as jest.Mock).mockReturnValue({
      gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole('img')).toHaveLength(3);
  });
});
