import { Container } from '@chakra-ui/react';
import Navbar from './Components/Navbar/Navbar';
import GameHubMain from './Components/Main/GameHubMain';
import './index.css';
import GameCard from './Components/Main/GameCard';

function App() {
  return (
    <Container maxW={'container.xl'}>
      <Navbar />
      {/* <GameHubMain /> */}
      <GameCard />
    </Container>
  );
}

export default App;
