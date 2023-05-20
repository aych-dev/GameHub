import GameIcons from './GameIcons';
import useGames, { Games } from '../../Hooks/useGames';
import styled from 'styled-components';
import CriticScore from './CriticScore';
import {
  Card,
  CardBody,
  CardHeader,
  Skeleton,
  Image,
  SimpleGrid,
} from '@chakra-ui/react';

const PlatformContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const GameCard = () => {
  const { games, isLoading } = useGames();

  const gameCard = games.map((data) => (
    <Skeleton key={data.id} isLoaded={isLoading}>
      <Card borderTopRadius='20px' marginTop={2}>
        <Image borderTopRadius='20px' src={data.background_image} />
        <CardBody>
          <PlatformContainer>
            <GameIcons
              platform={data.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore metacritic={data.metacritic} />
          </PlatformContainer>
        </CardBody>
        <CardHeader>{data.name}</CardHeader>
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
