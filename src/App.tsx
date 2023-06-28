import { Container, Grid, GridItem } from '@chakra-ui/react';
import Navbar from './Components/Navbar/Navbar';
import './index.css';
import GameCard from './Components/Main/GameCard';
import GenresList from './Components/Aside/GenresList';
import { useState } from 'react';
import { Genres } from './Hooks/useGenres';
import PlatformMenu from './Components/Main/PlatformMenu';
import { Platform } from './Hooks/useGames';
import SortingMenu from './Components/Main/SortingMenu';
import styled from 'styled-components';
import GameHeading from './Components/Main/GameHeading';

export interface GameQuery {
  genre: Genres | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

const MainMenuContainer = styled.div`
  display: flex;
  align-items: center;
`;

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Container maxW={'container.xl'}>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area={'nav'}>
          <Navbar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>
        <GridItem area={'main'}>
          <GameHeading gameQuery={gameQuery} />
          <MainMenuContainer>
            <PlatformMenu
              selectedPlatform={gameQuery.platform}
              onSelectedPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortingMenu
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </MainMenuContainer>
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
