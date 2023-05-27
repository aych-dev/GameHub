import { Container, Grid, GridItem } from '@chakra-ui/react';
import Navbar from './Components/Navbar/Navbar';
import './index.css';
import GameCard from './Components/Main/GameCard';
import GenresList from './Components/Aside/GenresList';
import { Genres } from './Hooks/useGenres';
import { useState } from 'react';

function App() {
  return (
    <Container maxW={'container.xl'}>
      <Grid
        templateAreas={`
      "nav nav"
      "aside main"`}
      >
        <GridItem area={'nav'}>
          <Navbar />
        </GridItem>
        <GridItem area={'main'}>
          <GameCard />
        </GridItem>
        <GridItem area={'aside'}>
          <GenresList />
        </GridItem>
      </Grid>
    </Container>
  );
}

export default App;
