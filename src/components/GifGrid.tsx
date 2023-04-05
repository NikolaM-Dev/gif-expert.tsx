import { useState, useEffect } from 'react';

import { getGifs } from '../services';
import { IGif } from '../models';

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
      {gifs.map(({ title, id, url }: IGif) => (
        <article key={id}>
          <h3>{title}</h3>
          <img src={url} alt={title} />
        </article>
      ))}
    </>
  );
};
