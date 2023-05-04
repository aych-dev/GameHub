import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { Icon } from '@chakra-ui/react';
import { Platform } from '../../Hooks/useGames';
import { IconType } from 'react-icons';
import styled from 'styled-components';

interface Props {
  platform: Platform[];
}

const PlatformContainer = styled.div``;

const GameIcons = ({ platform }: Props) => {
  const iconKey: { [key: string]: IconType } = {
    playstation: FaPlaystation,
    xbox: FaXbox,
    pc: FaWindows,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
  };

  const platformData: any = platform.map((p) => {
    return <Icon marginX={1} key={p.id} as={iconKey[p.slug]} />;
  });

  return <PlatformContainer>{platformData}</PlatformContainer>;
};

export default GameIcons;
