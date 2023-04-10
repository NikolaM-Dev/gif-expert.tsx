import { getGifs } from '../../src/services';

describe('Tests on get-gifs service', () => {
  const category = 'Dragon Ball Z';

  it('should to return a gifs array', async () => {
    const gifs = await getGifs(category);

    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs).toHaveLength(10);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
