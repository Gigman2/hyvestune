import { Box, Flex, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import { pixelToRem } from '~/helpers/misc'

interface Props { }

const NFTsHistory = () => {
    return (
        <Box
            bg="#333333"
            w="100%"
            borderRadius={pixelToRem(10)}
            minH={pixelToRem(580)}
        >
            <Flex direction="column" >
                <Heading
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
                    <Tabs>
                        <TabList>
                            <Tab
                                fontSize={pixelToRem(14)}
                            >One</Tab>
                            <Tab>Two</Tab>
                            <Tab>Three</Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel>
                                <p>one!</p>
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
    )
}

export default NFTsHistory