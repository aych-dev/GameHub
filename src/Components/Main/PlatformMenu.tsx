import React from 'react';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import styled from 'styled-components';
import usePlatform from '../../Hooks/usePlatforms';

const MenuContainer = styled.div`
  margin-top: 5px;
`;

const PlatformMenu = () => {
  const { data } = usePlatform();

  const platformElements = data.map((platform) => (
    <MenuItem key={platform.id}>{platform.name}</MenuItem>
  ));

  return (
    <MenuContainer>
      <Menu>
        <MenuButton as={Button}>Platforms</MenuButton>
        <MenuList>{platformElements}</MenuList>
      </Menu>
    </MenuContainer>
  );
};

export default PlatformMenu;
