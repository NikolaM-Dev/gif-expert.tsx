import { c } from '../config/constants';
import { Gif, IGif } from '../models';

export const getGifs = async (category: string): Promise<IGif[]> => {
  const url = `${c.giphyUrl}?api_key=${c.apiKey}&q=${category}&=limit=10`;
  const resp = await fetch(url);
  const { data: rawGifs } = await resp.json();

  return rawGifs.map(({ id, title, images }: Gif) => ({
    id,
    title,
    url: images.downsized_medium.url,
  }));
};
