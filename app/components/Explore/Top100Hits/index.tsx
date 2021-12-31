import { Box, Flex, Heading, Grid, GridItem } from '@chakra-ui/react';
import { pixelToRem } from '~/helpers/misc';
import ExploreCard from '~/components/Cards/ExploreCard';

const Top100Hits = () => {
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
          fontWeight={700}
          lineHeight={{ xl: pixelToRem(21.78) }}
          fontSize={{ xl: pixelToRem(16) }}
        >
          Top 100 Hits
        </Heading>
        <Box mt={{ xl: pixelToRem(17) }} overflowX="hidden" maxW={{ base: '100%' }} pos="relative">
          <Grid
            gap={{ base: pixelToRem(54), '5xl': pixelToRem(80) }}
            w="100%"
            templateColumns={'repeat(4,1fr)'}
          >
            {data.map((card, index: number) => (
              <GridItem>
                <ExploreCard showSubTexts {...card} key={((i) => i)(index)} />
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
};

export default Top100Hits;
