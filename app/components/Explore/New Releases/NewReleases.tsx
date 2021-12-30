import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
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
      song: 'Love Nwatiti',
      artist: 'Ckay',
      image: require('~/assets/images/ckay.png'),
    },
    {
      song: 'Love Nwatiti',
      artist: 'Ckay',
      image: require('~/assets/images/ckay.png'),
    },
    {
      song: 'Love Nwatiti',
      artist: 'Ckay',
      image: require('~/assets/images/ckay.png'),
    },
    {
      song: 'Love Nwatiti',
      artist: 'Ckay',
      image: require('~/assets/images/ckay.png'),
    },
    {
      song: 'Love Nwatiti',
      artist: 'Ckay',
      image: require('~/assets/images/ckay.png'),
    },
    {
      song: 'Love Nwatiti',
      artist: 'Ckay',
      image: require('~/assets/images/ckay.png'),
    },
    {
      song: 'Love Nwatiti',
      artist: 'Ckay',
      image: require('~/assets/images/ckay.png'),
    },
    {
      song: 'Love Nwatiti',
      artist: 'Ckay',
      image: require('~/assets/images/ckay.png'),
    },
  ];

  const { currentSlide, isMobile, handleClick } = useMotionSlide({ data });

  return (
    <Box mt={pixelToRem(164)}>
      <Flex pl={{ md: pixelToRem(42) }} direction="column">
        <Heading
          color="white"
          fontWeight={700}
          lineHeight={{ md: pixelToRem(21.78) }}
          fontSize={{ md: pixelToRem(16) }}
        >
          New Releases
        </Heading>
        <Box mt={pixelToRem(17)} overflowX="hidden" maxW={{ base: '100%' }} pos="relative">
          <MotionFlex
            pos="relative"
            w="100%"
            align="flex-start"
            maxW={{ base: '100%' }}
            animate={{
              x: isMobile
                ? `-${parseFloat(pixelToRem(230).replace('rem', '')) * currentSlide}rem`
                : `-${parseFloat(pixelToRem(230).replace('rem', '')) * currentSlide}rem`,
              transition: { ...transition },
            }}
            overflowX="unset"
          >
            {data.map((card, index: number) => (
              <ExploreCard {...card} key={((i) => i)(index)} />
            ))}
          </MotionFlex>
          <ArrowButtons
            handleClick={handleClick}
            current={currentSlide}
            cols={0}
            length={data.length}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default NewReleases;
