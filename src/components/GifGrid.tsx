import { GifItem } from './GifItem';
import { IGif } from '../models';
import { useFetchGifs } from '../hooks';

interface IProps {
  category: string;
}

export const GifGrid = ({ category }: IProps): JSX.Element => {
  const { gifs, isLoading } = useFetchGifs(category);

  return (
    <>
      <h2>{category}</h2>

      {isLoading && <p>Is Loading...</p>}

      <section className="card-grid">
        {gifs.map((gif: IGif) => (
          <GifItem key={gif.id} gif={gif} />
        ))}
      </section>
    </>
  );
};
