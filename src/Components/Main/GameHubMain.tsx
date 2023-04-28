import React, { useEffect, useState } from 'react';
import axios, { Axios, AxiosError } from 'axios';
import { Spinner } from '@chakra-ui/react';

interface Games {
  id: number;
  name: string;
  results: Games[];
}

const GameHubMain = () => {
  const [gamesData, setGamesdata] = useState<Games[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const getGameData = async () => {
      try {
        const { data } = await axios.get<Games>(
          'https://api.rawg.io/api/games?key=2c33ead7c9764d3fba6ff2f73e657b0a'
        );
        setGamesdata(data.results);
        setLoading(!isLoading);
      } catch (err) {
        setError((err as AxiosError).message);
        setLoading(!isLoading);
      }
    };
    getGameData();
  }, []);

  console.log(isLoading);

  const test = gamesData.map((data) => <li key={data.id}>{data.name}</li>);

  return (
    <>
      {isLoading && <Spinner />}
      {error && <p>{error}</p>}
      {test}
    </>
  );
};

export default GameHubMain;
