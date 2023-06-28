import meh from '/Users/aych/game-hub/src/assets/meh.webp';
import bullsEye from '/Users/aych/game-hub/src/assets/bulls-eye.webp';
import thumbsUp from '/Users/aych/game-hub/src/assets/thumbs-up.webp';
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
