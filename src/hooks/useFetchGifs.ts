import { useEffect, useState } from 'react';

import { getGifs } from '../services';
import { IGif } from '../models';

interface IUseFetchGifs {
  gifs: IGif[];
  isLoading: boolean;
}

export const useFetchGifs = (category: string): IUseFetchGifs => {
  const [gifs, setGifs] = useState<IGif[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getGifs(category).then((gifs) => {
      setGifs(gifs);
      setIsLoading(false);
    });
  }, [setGifs, category, setIsLoading]);

  return { gifs, isLoading };
};
