import { GameQuery } from '../App';
import useData from './useData';
import { Genres } from './useGenres';

export interface Games {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genres[];
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const useGames = (gameQuery: GameQuery) =>
  useData<Games>(
    'games',
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
      },
    },
    [gameQuery]
  );

export default useGames;
