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

const DarkModeText = styled.p`
  white-space: nowrap;
`;

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Flex className='mt-1' alignItems={'center'} gap={3}>
        <SearchInput />
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
