import React from 'react';
import styled from 'styled-components';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

const SortingContainer = styled.div`
  margin-top: 5px;
  margin-left: 10px;
`;

const sortingList = [
  'Relevance',
  'Date Added',
  'Name',
  'Release Date',
  'Popularity',
  'Average Rating',
];

const sortingElement = sortingList.map((list) => {
  return <MenuItem>{list}</MenuItem>;
});

const SortingMenu = () => {
  return (
    <SortingContainer>
      <Menu>
        <MenuButton as={Button}>Order by: Relevance</MenuButton>
        <MenuList>{sortingElement}</MenuList>
      </Menu>
    </SortingContainer>
  );
};

export default SortingMenu;
