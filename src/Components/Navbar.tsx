import {
  Flex,
  Image,
  Input,
  Switch,
  InputLeftElement,
  InputGroup,
} from '@chakra-ui/react';
import { useState } from 'react';
import gameHubIcon from '../Images/gamehublogo.webp';
import styled from 'styled-components';
import { Search2Icon } from '@chakra-ui/icons';

const DarkModeText = styled.p`
  white-space: nowrap;
`;

const Navbar = () => {
  const [toggleDarkMode, setToggleDarkMode] = useState(false);

  console.log(toggleDarkMode);

  return (
    <>
      <Flex className='mt-1' alignItems={'center'} gap={3}>
        <Image boxSize={'45px'} src={gameHubIcon} />
        <InputGroup>
          <InputLeftElement children={<Search2Icon />} />
          <Input placeholder='Search Games...' />
        </InputGroup>
        <Switch
          id='darkMode'
          onChange={() => setToggleDarkMode(!toggleDarkMode)}
        />
        <DarkModeText>Dark Mode</DarkModeText>
      </Flex>
    </>
  );
};

export default Navbar;
