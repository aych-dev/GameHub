import React from 'react';
import useGenres from '../../Hooks/useGenres';
import { List, ListIcon, ListItem, Spinner, Button } from '@chakra-ui/react';
import { Genres } from '../../Hooks/useGenres';
import { log } from 'console';

interface Props {
  selectedGenre: (genre: Genres) => void;
}

const GenresList = () => {
  const { data, error, isLoading } = useGenres();

  const genreElement = data.map((genre) => {
    return (
      <ListItem key={genre.id}>
        <ListIcon
          as={'img'}
          src={genre.image_background}
          boxSize={9}
          marginRight={2}
        />
        <Button>{genre.name}</Button>
      </ListItem>
    );
  });

  return (
    <>
      {isLoading === false ? (
        <Spinner></Spinner>
      ) : (
        <List marginTop={2}>{genreElement}</List>
      )}
    </>
  );
};

export default GenresList;
