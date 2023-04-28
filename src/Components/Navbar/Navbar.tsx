import {
  Flex,
  Image,
  Input,
  Switch,
  InputLeftElement,
  InputGroup,
  useColorMode,
} from '@chakra-ui/react';
import gameHubIcon from '../Navbar/gamehublogo.webp';
import styled from 'styled-components';
import { Search2Icon } from '@chakra-ui/icons';

const DarkModeText = styled.p`
  white-space: nowrap;
`;

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Flex className='mt-1' alignItems={'center'} gap={3}>
        <Image boxSize={'45px'} src={gameHubIcon} />
        <InputGroup>
          <InputLeftElement children={<Search2Icon />} />
          <Input placeholder='Search Games...' />
        </InputGroup>
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
