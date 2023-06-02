import useData from './useData';
import { Genres } from './useGenres';

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

const useGames = (selectedGenre: Genres | null) =>
  useData<Games>('games', { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);

export default useGames;
