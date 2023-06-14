import { Container, Grid, GridItem } from '@chakra-ui/react';
import Navbar from './Components/Navbar/Navbar';
import './index.css';
import GameCard from './Components/Main/GameCard';
import GenresList from './Components/Aside/GenresList';
import { useState } from 'react';
import { Genres } from './Hooks/useGenres';
import PlatformMenu from './Components/Main/PlatformMenu';
import { Platform } from './Hooks/useGames';

export interface GameQuery {
  genre: Genres | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  console.log(gameQuery);

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
          <PlatformMenu
            selectedPlatform={gameQuery.platform}
            onSelectedPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <GameCard gameQuery={gameQuery} />
        </GridItem>
        <GridItem area={'aside'}>
          <GenresList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Grid>
    </Container>
  );
}

export default App;
