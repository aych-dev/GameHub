import { ReactNode, useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import GameIcons from './GameIcons';
import { Games } from '../../Hooks/useGames';
import {
  Card,
  CardBody,
  CardHeader,
  Skeleton,
  Image,
  SimpleGrid,
} from '@chakra-ui/react';

const GameCard = () => {
  const [gameData, setGameData] = useState<Games[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getGameData = async () => {
      try {
        const { data } = await axios.get(
          'https://api.rawg.io/api/games?key=2c33ead7c9764d3fba6ff2f73e657b0a'
        );
        setGameData(data.results);
        setIsLoading(!isLoading);
      } catch (err) {
        setError((err as AxiosError).message);
        setIsLoading(!isLoading);
      }
    };
    getGameData();
  }, []);

  console.log(isLoading);

  const gameCard = gameData.map((data) => (
    <Skeleton key={data.id} isLoaded={isLoading}>
      <Card marginTop={2}>
        <Image src={data.background_image} />
        <CardHeader>{data.name}</CardHeader>
        <CardBody>
          <GameIcons platform={data.parent_platforms.map((p) => p.platform)} />
        </CardBody>
      </Card>
    </Skeleton>
  ));

  return (
    <>
      <SimpleGrid columns={4} spacing={5}>
        {gameCard}
      </SimpleGrid>
    </>
  );
};

export default GameCard;
