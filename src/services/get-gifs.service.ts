import { Gif, IGif } from '../models';

const GHIPHY_URL = 'https://api.giphy.com/v1/gifs/search';
const API_KEY = 'pjZygRY64aJ1Fsdp1JPJkKFTOA3wv8rA';

export const getGifs = async (category: string): Promise<IGif[]> => {
  const url = `${GHIPHY_URL}?api_key=${API_KEY}&q=${category}&=limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  return data.map(({ id, title, images }: Gif) => ({
    id,
    title,
    url: images.downsized_medium.url,
  }));
};
