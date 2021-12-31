import { Box, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import BalanceCard from '~/components/Cards/BalanceCard';
import BalanceAndTransactions from '~/components/Wallet/BalanceAndTransactions';
import Layout from '~/containers/layout/Layout';
import { pixelToRem } from '~/helpers/misc';

const Wallet: React.FC = () => {
  return (
    <Layout page={3} showHeader>
      <Box
        mt={{ xl: pixelToRem(164) }}
      >
        <Grid
          gap={pixelToRem(106)}
          templateColumns="repeat(2, 1fr)"
        >
          <BalanceAndTransactions />
          <GridItem></GridItem>
        </Grid>
      </Box>
    </Layout>
  );
};

export default Wallet;
