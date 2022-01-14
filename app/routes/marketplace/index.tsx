import { Box, Flex, Grid, GridItem, Heading } from '@chakra-ui/react'
import React from 'react'
import Layout from '~/containers/layout/Layout'
import { motion } from 'framer-motion';
import { pixelToRem } from '~/helpers/misc'
import SecondWave from '~/components/MarketPlace/SecondWave'
import NFTsHistory from '~/components/MarketPlace/NFTsHistory'
import useMotionSlide from '~/hooks/useMotionSilide';
import ArrowButtons from '~/components/ArrowButtons';
import StoriesCard from '~/components/Cards/Stories/StoriesCard';
const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
import AnotherMan from '~/assets/images/anotherMan.png'
import Boy from '~/assets/images/boy.png'
import Dark from '~/assets/images/dark.png'
import Eomsn from '~/assets/images/eomsn.png'
import Man from '~/assets/images/man.png'
import Little from '~/assets/images/little.png'
import Sto from '~/assets/images/sto.png'

const MotionFlex = motion(Flex);

interface Props { }

const MarketPlace: React.FC = () => {

    const data = [
        { avatarImage: Eomsn, active: true },
        { avatarImage: Man, active: true },
        { avatarImage: Little, active: true },
        { avatarImage: Boy, active: false },
        { avatarImage: AnotherMan, active: false },
        { avatarImage: Sto, active: false },
        { avatarImage: Dark, active: true },
    ]
    const { currentSlide, isMobile, handleClick } = useMotionSlide({ data });

    return (
        <Layout
            showHeader
            page={6}
        >
            <Grid pl={pixelToRem(42)} mt={pixelToRem(164)} templateColumns="63% 32%" gap={pixelToRem(62)} >
                <GridItem  >
                    <Flex w="100%" direction="column" >
                        <Box w="100%"
                            overflowX="hidden" maxW={{ base: '100%' }} pos="relative"
                        >
                            <Heading
                                pt={pixelToRem(5)}
                                fontSize={pixelToRem(18)}
                                fontWeight={600}
                                lineHeight={pixelToRem(21.78)}
                                fontStyle="normal"
                                fontFamily="Inter"
                                color="white"
                                mb={pixelToRem(18)} >
                                Trending Creators
                            </Heading>
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
                                {data.map((card, index) => (
                                    <GridItem
                                        key={((i) => i)(index)}
                                    >
                                        <StoriesCard {...{ ...card }} />
                                    </GridItem>
                                ))}

                            </MotionFlex>
                            <ArrowButtons
                                iconSize={4}
                                _hover={{ bg: '#E743A6' }}
                                bg="#E743A6"
                                size={pixelToRem(38)}
                                handleClick={handleClick}
                                current={currentSlide}
                                cols={0}
                                length={data.length}
                            />
                        </Box>
                    </Flex>
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