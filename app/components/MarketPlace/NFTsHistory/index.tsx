import { Avatar, Box, Flex, Grid, GridItem, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import React from 'react'
import NFTsHistoryCard from '~/components/Cards/NFTsHistoryCard'
import { pixelToRem } from '~/helpers/misc'
import Feelings from '~/assets/images/feelings.png'


const NFTsHistory: React.FC = () => {
    const data = [
        {
            cost: 5000,
            title: 'Mixed Feelings',
            artist: 'Godichi',
            image: Feelings
        },
        {
            cost: 5000,
            title: 'Mixed Feelings',
            artist: 'Godichi',
            image: Feelings
        },
        {
            cost: 5000,
            title: 'Mixed Feelings',
            artist: 'Godichi',
            image: Feelings
        },
        {
            cost: 5000,
            title: 'Mixed Feelings',
            artist: 'Godichi',
            image: Feelings
        },
        {
            cost: 5000,
            title: 'Mixed Feelings',
            artist: 'Godichi',
            image: Feelings
        }
    ]
    return (
        <Flex
            p={pixelToRem(16)} w="100%"
        >
            <Box
                bg="#333333"
                w="100%"
                borderRadius={pixelToRem(10)}
                minH={pixelToRem(580)}
                pt={pixelToRem(18)}
            >
                <Flex direction="column" >
                    <Heading
                        pl={pixelToRem(18)}
                        mb={pixelToRem(46)}
                        color="white"
                        fontFamily="Inter"
                        fontWeight={600}
                        fontStyle="normal"
                        fontSize={pixelToRem(14)}
                        lineHeight={pixelToRem(16.94)}
                    >
                        NFTs History
                    </Heading>

                    <Box w="100%" >
                        <Tabs w="100%"
                        >
                            <TabList
                                borderBottom="0.5px solid"
                                borderBottomColor="rgba(255, 255, 255, 0.5)"
                            >
                                <Tab
                                    mr={pixelToRem(25)}
                                    _focus={{ outline: 'none' }}
                                    _selected={{
                                        color: '#E743A6',
                                        borderBottomColor: '#E743A6'
                                    }}
                                    color="white"
                                    fontSize={pixelToRem(14)}
                                >Won</Tab>
                                <Tab
                                    mr={pixelToRem(25)}
                                    ml={pixelToRem(25)}
                                    _focus={{ outline: 'none' }}
                                    _selected={{
                                        color: '#E743A6',
                                        borderBottomColor: '#E743A6'
                                    }}
                                    color="white"
                                    fontSize={pixelToRem(14)}
                                >Waiting</Tab>
                                <Tab
                                    mr={pixelToRem(25)}
                                    ml={pixelToRem(25)}
                                    _focus={{ outline: 'none' }}
                                    _selected={{
                                        color: '#E743A6',
                                        borderBottomColor: '#E743A6'
                                    }}
                                    color="white"
                                    fontSize={pixelToRem(14)}
                                >Failed</Tab>
                            </TabList>

                            <TabPanels

                            >
                                <TabPanel
                                >
                                    <Grid
                                        // px={pixelToRem(12)}
                                        gap={pixelToRem(18)}
                                    >
                                        {

                                            data.map((item, index) => <GridItem key={(i => i)(index)} >
                                                <NFTsHistoryCard {...{ ...item }} />
                                            </GridItem>)
                                        }
                                    </Grid>
                                </TabPanel>
                                <TabPanel>
                                    <p>two!</p>
                                </TabPanel>
                                <TabPanel>
                                    <p>three!</p>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    )
}

export default NFTsHistory