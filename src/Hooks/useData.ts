import axios, { AxiosError, AxiosRequestConfig, CanceledError } from 'axios';
import { useState, useEffect } from 'react';

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();

      const getGenreData = async () => {
        try {
          const { data } = await axios.get<FetchResponse<T>>(
            `https://cryptic-anchorage-73113-c632759ca232.herokuapp.com/${endpoint}`,
            { signal: controller.signal, ...requestConfig }
          );
          setData(data.results);
          setIsLoading(true);
        } catch (err) {
          if (err instanceof CanceledError) return;
          setError((err as AxiosError).message);
          setIsLoading(true);
        }
      };
      getGenreData();
      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
};

export default useData;
