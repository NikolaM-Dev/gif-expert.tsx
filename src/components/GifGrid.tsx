interface IProps {
  category: string;
}

export const GifGrid = ({ category }: IProps): JSX.Element => {
  return (
    <>
      <h2>{category}</h2>
      <p>Hola Mundo</p>
    </>
  );
};
