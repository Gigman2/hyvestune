import { Box, Grid, GridItem } from '@chakra-ui/react';
import React from 'react'
import Recommended from '~/components/Recommended';
import Layout from '~/containers/layout/Layout';
import { pixelToRem } from '~/helpers/misc';
import { Folder } from '~/theme/Icons';
import DoubleWBanner from '~/components/Cards/DoubleWBanner';
import ContinuePlaying from '~/components/Cards/ContinuePlaying';
import SoundWave from '~/assets/images/sound-wave.png'


const ActiveBids: React.FC = () => {
    return  <Box
    pl={pixelToRem(42)}
    mt={{ xl: pixelToRem(164) }}
    w="100%"
  >
    <Grid
      templateColumns="62% 32%"
      w="100%"
      gap={pixelToRem(37)}
    >
      <GridItem>
        <DoubleWBanner color="htGradient.3" image={SoundWave} context={{heading: 'Trending No 1', main: 'SoundWave', subtext: 'Bidding: $4,440'}} />
      </GridItem>
      <GridItem>
        <ContinuePlaying />
      </GridItem>
    </Grid>
  </Box>
}

export default ActiveBids