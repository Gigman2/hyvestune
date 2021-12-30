import { Box, Flex, Image, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { pixelToRem } from '~/helpers/misc';
interface IPropsExploreCard {
  artist?: string;
  song?: string;
  image?: string;
  pointer?: any;
  showSubTexts?: boolean;
  imageText?: boolean;
  textForImage?: string;
}
const ExploreCard: React.FC<IPropsExploreCard> = ({
  pointer,
  artist,
  song,
  image,
  showSubTexts,
  imageText,
  textForImage,
}) => {
  return (
    <Box cursor="pointer" ref={pointer}>
      <Flex position="relative" borderRadius={pixelToRem(20)} w={'100'}>
        {imageText && (
          <Flex
            bg="transparent"
            w="100%"
            h="100%"
            justify="center"
            align="center"
            position="absolute"
          >
            <Heading
              color="white"
              fontWeight={700}
              fontSize={pixelToRem(24)}
              lineHeight={pixelToRem(29.05)}
            >
              {textForImage}
            </Heading>
          </Flex>
        )}
        <Image src={image} w="100%" height={{ xl: pixelToRem(246), '3xl': pixelToRem(266) }} />
      </Flex>

      {showSubTexts && (
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
      )}
    </Box>
  );
};

export default ExploreCard;
