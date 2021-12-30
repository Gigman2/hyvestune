import { Box, Flex, Image, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import Ckay from '~/assets/images/ckay.png';
import { pixelToRem } from '~/helpers/misc';
interface IPropsExploreCard {
  artist: string;
  song: string;
  image: string;
  pointer?: any;
}
const ExploreCard: React.FC<IPropsExploreCard> = ({ pointer, artist, song, image }) => {
  return (
    <Box ref={pointer} mr={pixelToRem(54)}>
      <Flex borderRadius={pixelToRem(20)} w={pixelToRem(230)}>
        <Image src={image} w="100%" height={pixelToRem(246)} />
      </Flex>

      <Box mt={pixelToRem(16)}>
        <Flex direction="column">
          <Heading
            color="white"
            fontWeight={700}
            lineHeight={{ md: pixelToRem(16.94) }}
            fontSize={{ md: pixelToRem(14) }}
          >
            {song}
          </Heading>

          <Text
            fontWeight={600}
            lineHeight={{ md: pixelToRem(14.52) }}
            fontSize={{ md: pixelToRem(12) }}
            mt={pixelToRem(7)}
          >
            {artist}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default ExploreCard;
