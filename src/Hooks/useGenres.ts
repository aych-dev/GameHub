import axios, { AxiosError } from 'axios';
import { useState, useEffect } from 'react';

export interface Genres {
  id: number;
  name: string;
}

export interface FetchGenreResponse {
  count: number;
  results: Genres[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genres[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getGenreData = async () => {
      try {
        const { data } = await axios.get<FetchGenreResponse>(
          'http://localhost:8000/genres'
        );
        setGenres(data.results);
        setIsLoading(false);
      } catch (err) {
        setError((err as AxiosError).message);
        setIsLoading(false);
      }
    };
    getGenreData();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
