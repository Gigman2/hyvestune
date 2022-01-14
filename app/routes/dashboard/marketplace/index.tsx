import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import Layout from '~/containers/layout/Layout'
import SecondWave from '~/components/MarketPlace/SecondWave'
import NFTsHistory from '~/components/MarketPlace/NFTsHistory'
import { pixelToRem } from '~/helpers/misc'
import TrendingCreators from '~/components/MarketPlace/TrendingCreators'
import RecommendedAuctions from '~/components/MarketPlace/RecommendedAuctions'



interface Props { }

const MarketPlace: React.FC = () => {



    return (
        <Layout
            showHeader
            page={6}
        >
            <Grid pl={pixelToRem(42)} mt={pixelToRem(164)} templateColumns="63% 32%" gap={pixelToRem(62)} >
                <GridItem  >
                    <Grid templateColumns="repeat(1,1fr)" gap={pixelToRem(51)} >
                        <GridItem>
                            <TrendingCreators />
                        </GridItem>
                        <GridItem>
                            <RecommendedAuctions />
                        </GridItem>
                    </Grid>
                </GridItem>
                <GridItem  >
                    <Grid
                        w="100%"
                        templateColumns="repeat(1, 1fr)"
                        gap={pixelToRem(41)}
                    >
                        <GridItem>
                            <SecondWave />
                        </GridItem>
                        <GridItem >
                            <NFTsHistory />
                        </GridItem>

                    </Grid>
                </GridItem>
            </Grid>
        </Layout>
    )
}

export default MarketPlace