import React from 'react';
import useGenres from '../../Hooks/useGenres';
import { ListItem, Spinner, UnorderedList } from '@chakra-ui/react';

const GenresList = () => {
  const { genres, error, isLoading } = useGenres();

  const genreElement = genres.map((genre) => {
    return (
      <>
        <ListItem key={genre.id}>{genre.name}</ListItem>
      </>
    );
  });

  return (
    <>
      {isLoading ? (
        <Spinner></Spinner>
      ) : (
        <UnorderedList marginTop={2}>{genreElement}</UnorderedList>
      )}
    </>
  );
};

export default GenresList;
