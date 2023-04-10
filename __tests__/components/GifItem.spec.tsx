import { render, screen } from '@testing-library/react';

import { GifItem } from '../../src/components';
import { IGif } from '../../src/models';

describe('Tests on <GifItem />', () => {
  const gif: IGif = {
    id: 'VXJWhaO7afRe',
    title: 'One Punch Man GIF',
    url: 'https://media3.giphy.com/media/VXJWhaO7afRe/giphy.gif?cid=6eaa0c54dkb9om3lb1yxvy9dh932peadlrhue6i6dsjyg67m&rid=giphy.gif&ct=g',
  };

  it('should to match with snapshot', () => {
    const { container } = render(<GifItem gif={gif} />);

    expect(container).toMatchSnapshot();
  });

  it('should to show the image with its url & alt', () => {
    render(<GifItem gif={gif} />);
    const { src, alt } = screen.getByRole('img') as HTMLImageElement;

    expect(src).toBe(gif.url);
    expect(alt).toBe(gif.title);
  });

  it('should to show title in the component', () => {
    render(<GifItem gif={gif} />);

    expect(screen.getByText(gif.title)).toBeTruthy();
  });
});
