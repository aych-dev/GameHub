import {
  Flex,
  Image,
  Input,
  Switch,
  InputLeftElement,
  InputGroup,
  useColorMode,
} from '@chakra-ui/react';
import styled from 'styled-components';
import SearchInput from './SearchInput';
import gameHubIcon from '../Navbar/gamehublogo.webp';

const DarkModeText = styled.p`
  white-space: nowrap;
`;

interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Flex className='mt-1' alignItems={'center'} gap={3}>
        <Image boxSize={'45px'} src={gameHubIcon} />
        <SearchInput onSearch={onSearch} />
        <Switch
          colorScheme='green'
          id='darkMode'
          onChange={toggleColorMode}
          isChecked={colorMode === 'dark'}
        />
        <DarkModeText>Dark Mode</DarkModeText>
      </Flex>
    </>
  );
};

export default Navbar;
