import { Badge } from '@chakra-ui/react';

interface Props {
  metacritic: number;
}

const CriticScore = ({ metacritic }: Props) => {
  return <Badge colorScheme='green'>{metacritic}</Badge>;
};

export default CriticScore;
