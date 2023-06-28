import meh from './meh.webp';
import thumbsUp from './thumbs-up.webp';
import bullsEye from './bulls-eye.webp';
import { Image, ImageProps } from '@chakra-ui/react';

interface Props {
  rating: number;
}

const Emojis = ({ rating }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: 'meh' },
    4: { src: thumbsUp, alt: 'great' },
    5: { src: bullsEye, alt: 'amazing' },
  };

  return <Image {...emojiMap[rating]} boxSize={'25px'} marginY={1} />;
};

export default Emojis;
