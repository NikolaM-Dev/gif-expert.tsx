import { renderHook, waitFor } from '@testing-library/react';

import { useFetchGifs } from '../../src/hooks';

describe('Tests on useFetchGifs hook', () => {
  const category = 'Dragon Ball Z';

  it('should to return initial state', () => {
    const { result } = renderHook(() => useFetchGifs(category));
    const { gifs, isLoading } = result.current;

    expect(gifs).toHaveLength(0);
    expect(isLoading).toBeTruthy();
  });

  it('should to return a gifs array & isLoading to false', async () => {
    const { result } = renderHook(() => useFetchGifs(category));

    await waitFor(() => expect(result.current.gifs.length).toBeGreaterThan(0), {
      timeout: 6000,
    });

    const { gifs, isLoading } = result.current;

    expect(gifs).toHaveLength(10);
    expect(isLoading).toBeFalsy();
  });
});
