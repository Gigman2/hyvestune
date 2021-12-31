import React from 'react'
import { pixelToRem } from '~/helpers/misc'
import { Box, Flex, Grid, GridItem, Heading, Icon, Text } from '@chakra-ui/react'
import { BiTrendingDown, BiTrendingUp } from 'react-icons/bi'
interface IPropsCreditDebitCard {
    type: string,
    value: number
    title: string
}
const CreditDebitCard: React.FC<IPropsCreditDebitCard> = ({ title, value, type }) => {
    const isNegative = (i: number): boolean => i < 0
    return (
        <Box
            cursor="pointer"
            w="100%"
            h={pixelToRem(74)}
            _hover={{ bg: "rgba(255, 255, 255, 0.12)" }}
            bg="black"
            borderRadius={pixelToRem(10)}
            p={pixelToRem(17)}
        >
            <Flex
                direction="row"
                justify="space-between"
                align="center"
            >
                <Grid
                    w="50%"
                    templateColumns="20% 80%"
                >
                    <GridItem>
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            height={pixelToRem(40)}
                            w={pixelToRem(40)}
                            rounded={pixelToRem((40))}
                            bg={isNegative(value) ? "rgba(253, 7, 7, 0.4)" : 'rgba(53, 185, 7, 0.4)'}
                        >
                            <Icon color={isNegative(value) ? "red" : '#35B907'} boxSize={6} as={isNegative(value) ? BiTrendingDown : BiTrendingUp} />
                        </Box>
                    </GridItem>
                    <GridItem>
                        <Flex w="100%" direction="column" >
                            <Heading
                                color="white"
                                fontWeight={700}
                                lineHeight={{ md: pixelToRem(16.94) }}
                                fontSize={{ md: pixelToRem(14) }}
                            >
                                {type}
                            </Heading>

                            <Text
                                fontWeight={600}
                                lineHeight={{ md: pixelToRem(14.52) }}
                                fontSize={{ md: pixelToRem(12) }}
                                mt={pixelToRem(7)}
                                color="brandGrey.100"
                            >
                                {title}
                            </Text>
                        </Flex>

                    </GridItem>
                </Grid>
                <Box>
                    <Text
                        color="white"
                        fontWeight={600}
                        fontSize={pixelToRem(16)}
                        lineHeight={pixelToRem(19.36)}
                    >
                        {value}$
                    </Text>
                </Box>
            </Flex>
        </Box>
    )
}



export default CreditDebitCard
