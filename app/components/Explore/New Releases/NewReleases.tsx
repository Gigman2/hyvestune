import { Box, Flex, Heading, Grid, GridItem } from '@chakra-ui/react';
import { pixelToRem } from '~/helpers/misc';
import { motion } from 'framer-motion';
import useMotionSlide from '~/hooks/useMotionSilide';
import ArrowButtons from '~/components/ArrowButtons';
import ExploreCard from '~/components/Cards/ExploreCard';
const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const MotionFlex = motion(Flex);

const NewReleases = () => {
  const data = [
    {
      song: 'Love Nwatiti',
      artist: 'Ckay',
      image: require('~/assets/images/ckay.png'),
    },
    {
      song: 'Stay',
      artist: 'Kid Lori ft Justin beiber',
      image: require('~/assets/images/stay.png'),
    },
    {
      song: 'Everything Sucks',
      artist: 'Vaultboy',
      image: require('~/assets/images/vault.png'),
    },
    {
      song: 'Good Part',
      artist: 'AJR',
      image: require('~/assets/images/ar.png'),
    },
  ];

  const group = (data: any[]) => {
    const results = [];
    let temp = [];

    for (let i = 0; i < data.length; i++) {
      if (temp.length === 4) {
        results.push(temp);
        temp = [];
      }
      if (temp.length !== 4 && data[i]) {
        temp.push(data[i]);
      }
    }

    if (temp.length) {
      results.push(temp);
    }
    return results;
  };

  const { currentSlide, isMobile, handleClick } = useMotionSlide({ data: group(data) });

  return (
    <Box mt={{ xl: pixelToRem(164) }}>
      <Flex pl={{ xl: pixelToRem(42) }} direction="column">
        <Heading
          color="white"
          fontWeight={700}
          lineHeight={{ xl: pixelToRem(21.78) }}
          fontSize={{ xl: pixelToRem(16) }}
        >
          New Releases
        </Heading>
        <Box mt={{ xl: pixelToRem(17) }} overflowX="hidden" maxW={{ base: '100%' }} pos="relative">
          <MotionFlex
            pos="relative"
            w="100%"
            align="flex-start"
            animate={{
              x: isMobile
                ? `-${parseFloat(pixelToRem(1182).replace('rem', '')) * currentSlide}rem`
                : `-${parseFloat(pixelToRem(1182).replace('rem', '')) * currentSlide}rem`,
              transition: { ...transition },
            }}
          >
            {group(data).map((card, index: number) => (
              <Grid
                pr={pixelToRem(76)}
                minW={'100%'}
                key={((i) => i)(index)}
                gap={{ base: pixelToRem(54), '5xl': pixelToRem(80) }}
                templateColumns="repeat(4, 1fr)"
              >
                {card.map((card, index) => (
                  <GridItem>
                    <ExploreCard showSubTexts {...card} key={((i) => i)(index)} />
                  </GridItem>
                ))}
              </Grid>
            ))}
          </MotionFlex>
          <ArrowButtons
            handleClick={handleClick}
            current={currentSlide}
            cols={0}
            length={group(data).length}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default NewReleases;
