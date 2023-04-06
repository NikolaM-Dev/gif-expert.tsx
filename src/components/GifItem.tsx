import { IGif } from '../models';

interface IProps {
  gif: IGif;
}

export const GifItem = ({ gif }: IProps): JSX.Element => {
  return (
    <article className="card">
      <img src={gif.url} alt={gif.title} />
      <p>{gif.title}</p>
    </article>
  );
};
