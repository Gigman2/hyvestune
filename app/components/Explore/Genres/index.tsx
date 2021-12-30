import { Box, Flex, Grid, GridItem, Heading } from '@chakra-ui/react';
import ExploreCard from '~/components/Cards/ExploreCard';
import { pixelToRem } from '~/helpers/misc';

const Genres = () => {
  const data = [
    {
      textForImage: '',
      image: require('~/assets/images/blue.png'),
    },
    {
      textForImage: '',
      image: require('~/assets/images/pink.png'),
    },
    {
      textForImage: '',
      image: require('~/assets/images/yellow.png'),
    },
    {
      textForImage: '',
      image: require('~/assets/images/blueC.png'),
    },
  ];
  return (
    <Box mt={{ xl: pixelToRem(31) }} mb={20} pr={pixelToRem(76)}>
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
                <ExploreCard imageText {...card} key={((i) => i)(index)} />
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
};

export default Genres;
