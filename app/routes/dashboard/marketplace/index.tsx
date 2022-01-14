import { Box, Flex, Grid, GridItem, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import Layout from '~/containers/layout/Layout'
import { pixelToRem } from '~/helpers/misc'
import { Confetti } from '~/theme/Icons'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import SecondWave from '~/components/MarketPlace/SecondWave'
import NFTsHistory from '~/components/MarketPlace/NFTsHistory'

interface Props { }

const MarketPlace: React.FC = () => {
    return (
        <Layout
            showHeader
            page={6}
        >
            <Grid pl={pixelToRem(42)} mt={pixelToRem(164)} templateColumns="63% 32%" gap={pixelToRem(62)} >
                <GridItem  ></GridItem>
                <GridItem  >
                    <Grid
                        w="100%"
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