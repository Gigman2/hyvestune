import { Box, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import BalanceCard from '~/components/Cards/BalanceCard';
import BalanceAndTransactions from '~/components/Wallet/BalanceAndTransactions';
import TransactionDetails from '~/components/Wallet/TransactionDetails';
import Layout from '~/containers/layout/Layout';
import { pixelToRem } from '~/helpers/misc';

const Wallet: React.FC = () => {
  return (
    <Layout page={3} showHeader>
      <Box
        pb={pixelToRem(20)}
        mt={{ xl: pixelToRem(164) }}
        pl={{ xl: pixelToRem(42) }}
      >
        <Grid
          gap={pixelToRem(106)}
          templateColumns="repeat(2, 1fr)"
          pr={pixelToRem(76)}
        >
          <BalanceAndTransactions />
          <TransactionDetails />
        </Grid>
      </Box>
    </Layout>
  );
};

export default Wallet;
