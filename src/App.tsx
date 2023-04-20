import { Container } from '@chakra-ui/react';
import Navbar from './Components/Navbar';
import './index.css';

function App() {
  return (
    <Container maxW={'container.xl'}>
      <Navbar />
    </Container>
  );
}

export default App;
