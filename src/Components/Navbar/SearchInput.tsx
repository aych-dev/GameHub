import { Image, Input, InputLeftElement, InputGroup } from '@chakra-ui/react';
import gameHubIcon from '../Navbar/gamehublogo.webp';
import { Search2Icon } from '@chakra-ui/icons';

const SearchInput = () => {
  return (
    <>
      <Image boxSize={'45px'} src={gameHubIcon} />
      <InputGroup>
        <InputLeftElement children={<Search2Icon />} />
        <Input placeholder='Search Games...' />
      </InputGroup>
    </>
  );
};

export default SearchInput;
