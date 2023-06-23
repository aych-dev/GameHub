import React from 'react';
import styled from 'styled-components';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

const SortingContainer = styled.div`
  margin-top: 5px;
  margin-left: 10px;
`;

const sortingList = [
  { value: '', label: 'Relevance' },
  { value: '-added', label: 'Date Added' },
  { value: 'name', label: 'Name' },
  { value: '-released', label: 'Release Date' },
  { value: '-metacritic', label: 'Popularity ' },
  { value: '-rating', label: 'Average Rating' },
];

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortingMenu = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortingElement = sortingList.map((list) => {
    return (
      <MenuItem
        onClick={() => onSelectSortOrder(list.value)}
        value={list.value}
        key={list.value}
      >
        {list.label}
      </MenuItem>
    );
  });

  const sortingLabel = sortingList.find((order) => order.value === sortOrder);

  return (
    <SortingContainer>
      <Menu>
        <MenuButton as={Button}>
          Order by: {sortingLabel?.label || 'Relevance'}
        </MenuButton>
        <MenuList>{sortingElement}</MenuList>
      </Menu>
    </SortingContainer>
  );
};

export default SortingMenu;
