import React, { useState } from 'react';
import useGenres from '../../Hooks/useGenres';
import { List, ListIcon, ListItem, Spinner, Button } from '@chakra-ui/react';
import { Genres } from '../../Hooks/useGenres';

interface Props {
  onSelectGenre: (genre: Genres) => void;
}

const GenresList = ({ onSelectGenre }: Props) => {
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
        <Button onClick={() => onSelectGenre(genre)} variant={'link'}>
          {genre.name}
        </Button>
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
