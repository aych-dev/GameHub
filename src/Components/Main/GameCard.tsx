import GameIcons from './GameIcons';
import useGames from '../../Hooks/useGames';
import styled from 'styled-components';
import CriticScore from './CriticScore';
import {
  Card,
  CardBody,
  CardHeader,
  Skeleton,
  SkeletonText,
  Image,
  SimpleGrid,
  Flex,
  Text,
} from '@chakra-ui/react';
import { GameQuery } from '../../App';

const PlatformContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

interface Props {
  gameQuery: GameQuery;
}

const GameCard = ({ gameQuery }: Props) => {
  const { data, isLoading } = useGames(gameQuery);

  const gameCard = data.map((game) => (
    <Skeleton key={game.id} isLoaded={isLoading}>
      <Card borderTopRadius='20px' marginTop={2}>
        <Image
          borderTopRadius='20px'
          boxSize={'300px'}
          objectFit={'cover'}
          src={game.background_image}
        />
        <CardBody>
          <SkeletonText isLoaded={isLoading} />
          <PlatformContainer>
            <GameIcons
              platform={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore metacritic={game.metacritic} />
          </PlatformContainer>
        </CardBody>
        <CardHeader>{game.name}</CardHeader>
      </Card>
    </Skeleton>
  ));

  return (
    <>
      {isLoading === false ? (
        <Skeleton />
      ) : (
        <SimpleGrid columns={4} spacing={5}>
          {gameCard}
        </SimpleGrid>
      )}
    </>
  );
};

export default GameCard;
