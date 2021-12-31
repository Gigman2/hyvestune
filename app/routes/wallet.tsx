import { Box, Grid, GridItem } from '@chakra-ui/react';
import BalanceCard from '~/components/Cards/BalanceCard';
import Layout from '~/containers/layout/Layout';
import { pixelToRem } from '~/helpers/misc';

const Wallet = () => {
  return (
    <Layout page={3} showHeader>
        <Box  
         mt={{ xl: pixelToRem(164) }}
        >
            <Grid
            gap={pixelToRem(106)}
            templateColumns="repeat(2, 1fr)"
            >
                <GridItem>
                    <BalanceCard/>

                </GridItem>
                <GridItem></GridItem>
            </Grid>

        </Box>
    
    </Layout>
  );
};

export default Wallet;
