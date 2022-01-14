import { Box, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import ContinuePlaying from '~/components/Cards/ContinuePlaying';
import SongOfTheWeek from '~/components/Cards/SongOfTheWeek';
import Top100Hits from '~/components/Explore/Top100Hits';
import Layout from '~/containers/layout/Layout';
import { pixelToRem } from '~/helpers/misc';

const Dashboard = () => {
  return <Layout page={1} showHeader >
    <Box
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
          <SongOfTheWeek />
        </GridItem>
        <GridItem>
          <ContinuePlaying />
        </GridItem>
      </Grid>
    </Box>
    <Top100Hits title="Top Trending" headerFontFamily="Lato" textFontFamily="Lato" />
    <Top100Hits title="Recommended" headerFontFamily="Lato" textFontFamily="Lato" />
  </Layout>;
};

export default Dashboard;
