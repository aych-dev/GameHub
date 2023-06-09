import { Container, Grid, GridItem } from '@chakra-ui/react';
import Navbar from './Components/Navbar/Navbar';
import './index.css';
import GameCard from './Components/Main/GameCard';
import GenresList from './Components/Aside/GenresList';
import { useState } from 'react';
import { Genres } from './Hooks/useGenres';

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genres | null>(null);

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
          <GameCard selectedGenre={selectedGenre} />
        </GridItem>
        <GridItem area={'aside'}>
          <GenresList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Grid>
    </Container>
  );
}

export default App;
