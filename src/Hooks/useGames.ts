import axios, { AxiosError } from 'axios';
import { useState, useEffect } from 'react';

export interface Games {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

interface FetchGamesResponse {
  count: number;
  results: Games[];
}

const useGames = () => {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getGenreData = async () => {
      try {
        const { data } = await axios.get<FetchGamesResponse>(
          'http://localhost:8000/games'
        );
        setGames(data.results);
        setIsLoading(true);
      } catch (err) {
        setError((err as AxiosError).message);
        setIsLoading(true);
      }
    };
    getGenreData();
  }, []);

  return { games, error, isLoading };
};

export default useGames;
