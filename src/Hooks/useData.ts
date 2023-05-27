import axios, { AxiosError } from 'axios';
import { useState, useEffect } from 'react';

export interface Genres {
  id: number;
  name: string;
  image_background: string;
}

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getGenreData = async (endpoint: string) => {
      try {
        const { data } = await axios.get<FetchResponse<T>>(
          `http://localhost:8000/${endpoint}`
        );
        setData(data.results);
        setIsLoading(true);
      } catch (err) {
        setError((err as AxiosError).message);
        setIsLoading(true);
      }
    };
    getGenreData(endpoint);
  }, [endpoint]);

  return { data, error, isLoading };
};

export default useData;
