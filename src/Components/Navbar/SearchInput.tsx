import { Image, Input, InputLeftElement, InputGroup } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import { useRef } from 'react';
import styled from 'styled-components';

interface Props {
  onSearch: (searchText: string) => void;
}

const FormContainer = styled.form`
  width: 100%;
`;

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <FormContainer
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<Search2Icon />} />
        <Input ref={ref} placeholder='Search Games...' />
      </InputGroup>
    </FormContainer>
  );
};

export default SearchInput;
