import React from 'react';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import styled from 'styled-components';
import usePlatform from '../../Hooks/usePlatforms';
import { Platform } from '../../Hooks/useGames';

const MenuContainer = styled.div`
  margin-top: 5px;
`;

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformMenu = ({ onSelectedPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatform();

  const platformElements = data.map((platform) => (
    <MenuItem onClick={() => onSelectedPlatform(platform)} key={platform.id}>
      {platform.name}
    </MenuItem>
  ));

  if (error) return null;

  return (
    <MenuContainer>
      <Menu>
        <MenuButton as={Button}>
          {selectedPlatform ? selectedPlatform.name : 'Platform'}
        </MenuButton>
        <MenuList>{platformElements}</MenuList>
      </Menu>
    </MenuContainer>
  );
};

export default PlatformMenu;
