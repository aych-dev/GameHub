import React, { useState } from 'react';
import useGenres from '../../Hooks/useGenres';
import { List, ListIcon, ListItem, Spinner, Button } from '@chakra-ui/react';
import { Genres } from '../../Hooks/useGenres';

interface Props {
  onSelectGenre: (genre: Genres) => void;
  selectedGenre: Genres | null;
}

const GenresList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();

  const genreElement = data.map((genre) => {
    if (error) return null;

    return (
      <ListItem key={genre.id}>
        <ListIcon
          as={'img'}
          src={genre.image_background}
          boxSize={9}
          marginRight={2}
        />
        <Button
          fontWeight={genre.id == selectedGenre?.id ? 'bold' : 'normal'}
          onClick={() => onSelectGenre(genre)}
          variant={'link'}
        >
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
