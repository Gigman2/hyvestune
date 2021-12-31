import React from 'react'
import { Box, Divider, Flex, Grid, GridItem, Heading, Icon, Text } from '@chakra-ui/react'
import { pixelToRem } from '~/helpers/misc'
import { BiTrendingUp } from 'react-icons/bi'

const TransactionDetails: React.FC = () => {
    return (
        <GridItem>
            <Grid
                h={pixelToRem(774)}
                borderRadius={pixelToRem(10)}
                bg="rgba(255, 255, 255, 0.12)"
                templateRows="85% 15%"
            >
                <GridItem >
                    <Flex
                        px={pixelToRem(33)}
                        pt={pixelToRem(26)}
                        w="100%" justify="center" align="center" >
                        <Heading
                            color="white"
                            fontWeight={600}
                            fontSize={pixelToRem(16)}
                            lineHeight={pixelToRem(19.36)}
                        >Transaction Details</Heading>
                    </Flex>
                    <Flex
                        mt={pixelToRem(53)}
                        justify="center" align="center"
                        px={pixelToRem(33)}

                    >
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            height={pixelToRem(71)}
                            w={pixelToRem(71)}
                            rounded={pixelToRem((71))}
                            bg={'rgba(53, 185, 7, 0.4)'}
                        >
                            <Icon boxSize={8} color="#35B907" as={BiTrendingUp} />
                        </Box>
                    </Flex>
                    <Flex
                        px={pixelToRem(33)}

                        mt={pixelToRem(34)}
                        align="center"
                        justify="center"
                    >
                        <Text
                            fontWeight={600}
                            fontSize={pixelToRem(18)}
                            lineHeight={pixelToRem(21.78)}
                            color="white"
                        >-0.99$</Text>
                    </Flex>


                    <Box
                        px={pixelToRem(33)}

                        mt={pixelToRem(71)}
                        w='100%'
                    >
                        <Flex mt={pixelToRem(49)} direction="row" justify="space-between" >
                            <Box
                                w="50%"
                            >
                                <Heading
                                    fontWeight={600}
                                    fontSize={pixelToRem(18)}
                                    lineHeight={pixelToRem(21.78)}
                                    color="white"
                                >
                                    To
                                </Heading>
                            </Box>
                            <Flex
                                justify="flex-end"
                                w="50%"
                            >
                                <Text
                                    fontWeight={400}
                                    fontSize={pixelToRem(14)}
                                    lineHeight={pixelToRem(16.94)}
                                    color="white"
                                >
                                    00x12wyz44678999000236
                                </Text>
                            </Flex>
                        </Flex>
                        <Flex

                            mt={pixelToRem(49)} direction="row" justify="space-between" >
                            <Box
                                w="50%"
                            >
                                <Heading
                                    fontWeight={600}
                                    fontSize={pixelToRem(18)}
                                    lineHeight={pixelToRem(21.78)}
                                    color="white"
                                >
                                    Date
                                </Heading>
                            </Box>
                            <Flex
                                justify="flex-end"
                                w="50%"
                            >
                                <Text

                                    fontWeight={400}
                                    fontSize={pixelToRem(14)}
                                    lineHeight={pixelToRem(16.94)}
                                    color="white"
                                >
                                    24, October 2021
                                </Text>
                            </Flex>
                        </Flex>
                        <Flex mt={pixelToRem(49)} direction="row" justify="space-between" >
                            <Box w="50%">
                                <Heading
                                    fontWeight={600}
                                    fontSize={pixelToRem(18)}
                                    lineHeight={pixelToRem(21.78)}
                                    color="white"
                                >
                                    Narration
                                </Heading>
                            </Box>
                            <Flex justify="flex-end" w="50%">
                                <Text
                                    fontWeight={400}
                                    fontSize={pixelToRem(14)}
                                    lineHeight={pixelToRem(16.94)}
                                    color="white"
                                >
                                    Royalities for blinding lights NFTs more description if necessary
                                </Text>
                            </Flex>
                        </Flex>

                    </Box>
                </GridItem>

                <GridItem>
                    <Divider color="rgba(255, 255, 255, 0.5)" />
                    <Flex h="100%" w="100%" justify="center" align="center" >
                        <Flex px={pixelToRem(24)} w="100%" direction="row"  >
                            <Flex
                                mr={pixelToRem(27)}
                                justify="center" align="center"
                                bg="rgba(231, 67, 166, 0.12)"
                                w={pixelToRem(40)}
                                h={pixelToRem(40)}
                                rounded={pixelToRem(40)}
                            >
                                <Text color="#E743A6" >!</Text>
                            </Flex>
                            <Flex
                                justify="center" align="center"

                            >
                                <Heading
                                    color="white"
                                    fontWeight={600}
                                    fontSize={pixelToRem(18)}
                                    lineHeight={pixelToRem(21.78)}
                                >
                                    Report an issue
                                </Heading>
                            </Flex>
                        </Flex>
                    </Flex>
                </GridItem>


            </Grid>

        </GridItem>
    )
}



export default TransactionDetails
