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
import { Genres } from '../../Hooks/useGenres';

const PlatformContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

interface Props {
  selectedGenre: Genres | null;
}

const GameCard = ({ selectedGenre }: Props) => {
  const { data, isLoading } = useGames(selectedGenre);
  console.log(data);

  const filteredGames = data.filter((game) => {
    if (selectedGenre) {
      return game.genres.some((genre) => genre.id === selectedGenre.id);
    }
    return true;
  });

  const gameCard = filteredGames.map((game) => (
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
      ) : filteredGames.length > 0 ? (
        <SimpleGrid columns={4} spacing={5}>
          {gameCard}
        </SimpleGrid>
      ) : (
        <Flex align={'center'}>
          <Card borderTopRadius='20px' marginTop={2}>
            <CardHeader>No Data</CardHeader>
            <CardBody>
              <Text>Select Different Genre</Text>
            </CardBody>
          </Card>
        </Flex>
      )}
    </>
  );
};

export default GameCard;
