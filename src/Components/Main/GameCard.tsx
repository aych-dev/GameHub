import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';

import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Image,
  SimpleGrid,
} from '@chakra-ui/react';

interface Games {
  id: number;
  name: string;
  results: Games[];
  background_image: string;
}

const GameCard = () => {
  const [gameData, setGameData] = useState<Games[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const getGameData = async () => {
      try {
        const { data } = await axios.get<Games>(
          'https://api.rawg.io/api/games?key=2c33ead7c9764d3fba6ff2f73e657b0a'
        );
        setGameData(data.results);
      } catch (err) {
        setError((err as AxiosError).message);
      }
    };
    getGameData();
  }, []);

  console.log(gameData);

  const gameImage = gameData.map((data) => (
    <Card key={data.id} maxW={'sm'}>
      <CardBody>
        <Image src={data.background_image} />
      </CardBody>
      <CardHeader>{data.name}</CardHeader>
      <CardFooter>CardFooter</CardFooter>
    </Card>
  ));

  return (
    <>
      <SimpleGrid columns={4} spacing={5}>
        {gameImage}
      </SimpleGrid>
    </>
  );
};

export default GameCard;
