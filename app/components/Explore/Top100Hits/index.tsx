import { Box, Flex, Heading, Grid, GridItem } from '@chakra-ui/react';
import { pixelToRem } from '~/helpers/misc';
import ExploreCard from '~/components/Cards/ExploreCard';

interface ITop10Hits {
  _data?: any[]
  title: string
  headerFontSize?: any, headerLineHeight?: any, headerFontWeight?: any
  headerFontFamily?: any
  textFontFamily?: any
}

const Top100Hits: React.FC<ITop10Hits> = ({ _data, title, headerFontSize, headerLineHeight, headerFontWeight, headerFontFamily, textFontFamily }) => {
  const data = [
    {
      song: 'Blinding Lights',
      artist: 'The Weekend',
      image: require('~/assets/images/lights.png'),
    },
    {
      song: 'Guelliotin',
      artist: 'Jon Bellion',
      image: require('~/assets/images/b1.png'),
    },
    {
      song: 'Crazy Things',
      artist: 'Tems',
      image: require('~/assets/images/tems.png'),
    },
    {
      song: 'Human Mind',
      artist: 'Jon Bellion',
      image: require('~/assets/images/b2.png'),
    },
  ];

  return (
    <Box mt={{ xl: pixelToRem(31) }} mb={3} pr={pixelToRem(76)}>
      <Flex pl={{ xl: pixelToRem(42) }} direction="column">
        <Heading
          color="white"
          fontFamily={headerFontFamily || "Inter"}
          fontWeight={headerFontWeight || 700}
          lineHeight={headerLineHeight || { xl: pixelToRem(21.78) }}
          fontSize={headerFontSize || { xl: pixelToRem(16) }}
        >
          {title}
        </Heading>
        <Box mt={{ xl: pixelToRem(17) }} overflowX="hidden" maxW={{ base: '100%' }} pos="relative">
          <Grid
            gap={{ base: pixelToRem(54), '5xl': pixelToRem(80) }}
            w="100%"
            templateColumns={'repeat(4,1fr)'}
          >
            {(_data || data).map((card, index: number) => (
              <GridItem
                key={((i) => i)(index)}
              >
                <ExploreCard textFontFamily={textFontFamily} showSubTexts {...card} />
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
};

export default Top100Hits;
