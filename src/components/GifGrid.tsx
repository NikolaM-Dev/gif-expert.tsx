import { useState, useEffect } from 'react';

import { getGifs } from '../services';
import { IGif } from '../models';
import { GifItem } from './GifItem';

interface IProps {
  category: string;
}

export const GifGrid = ({ category }: IProps): JSX.Element => {
  const [gifs, setGifs] = useState<IGif[]>([]);

  useEffect(() => {
    getGifs(category).then(setGifs);
  }, [setGifs]);

  return (
    <>
      <h2>{category}</h2>

      <section className="card-grid">
        {gifs.map((gif: IGif) => (
          <GifItem key={gif.id} gif={gif} />
        ))}
      </section>
    </>
  );
};
