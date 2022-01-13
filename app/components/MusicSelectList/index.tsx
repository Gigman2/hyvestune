import { Box, Flex, Grid, GridItem, Heading, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { BiTime } from 'react-icons/bi'
import { pixelToRem } from '~/helpers/misc'
import SelectMusic from '../Cards/SelectMusic'

interface IData {
    title: string
    artist: string,
}

interface IMusicSelectList {
    data: IData[],
    number?: boolean,
    showHeader?: boolean
    optionsTemplateColumns?: any
    middleOptionJustify?: any
    asDotOptionsIcon?: boolean
}

interface IHeaderProps {
    optionsTemplateColumns?: any
    middleOptionJustify?: any
}

const Header: React.FC<IHeaderProps> = ({ optionsTemplateColumns, middleOptionJustify }) => {
    return (
        <Box mt={pixelToRem(70)} h={pixelToRem(14)} w="90%" mr={12}  {...{ px: pixelToRem(18.61), borderRadius: pixelToRem(5) }} >
            <Flex w="100%" >
                <Grid w="100%" templateColumns="50% 50%" >
                    <GridItem>
                        <Flex
                            w="100%"
                            justify="flex-start"
                            align="center"
                        >
                            <Grid
                                cursor="pointer"
                                w="100%"
                                templateColumns="10% 90%"
                            >
                                <GridItem
                                    h={pixelToRem(43)}
                                >
                                    <Flex
                                        h="100%"
                                        align="center"
                                        justify="center"
                                        color="white"
                                    >
                                        <Text as="span"
                                            mr={pixelToRem(43.99)}
                                            fontFamily="Inter"
                                            color="white"
                                            fontWeight={400}
                                            lineHeight={{ md: pixelToRem(18) }}
                                            fontSize={{ md: pixelToRem(21.78) }}
                                        >
                                            #
                                        </Text>
                                    </Flex>
                                </GridItem>
                                <GridItem
                                    h={pixelToRem(43)}
                                >
                                    <Flex h="100%" direction="column" justify="center" >
                                        <Heading
                                            fontFamily="Inter"
                                            color="white"
                                            fontWeight={400}
                                            lineHeight={{ md: pixelToRem(18) }}
                                            fontSize={{ md: pixelToRem(21.78) }}
                                        >
                                            Title
                                        </Heading>
                                    </Flex>
                                </GridItem>
                            </Grid>
                        </Flex>
                    </GridItem>
                    <GridItem>
                        <Flex
                            w="100%"
                            justify="flex-end" align="center"
                        >
                            <Grid
                                h={pixelToRem(43)}
                                w="50%"
                                templateColumns={optionsTemplateColumns || "repeat(3, 1fr)"}
                            >
                                <GridItem>
                                    <Flex
                                        h="100%"
                                        justify="center" align="center"
                                    >
                                    </Flex>
                                </GridItem>
                                <GridItem>
                                    <Flex
                                        h="100%"
                                        justify={middleOptionJustify || "center"} align="center"
                                    >

                                        <Icon
                                            as={BiTime}
                                            fontFamily="Inter"
                                            fontWeight={400}
                                            lineHeight={{ md: pixelToRem(21.78) }}
                                            fontSize={{ md: pixelToRem(18) }}
                                            mt={pixelToRem(7)}
                                            color="white"
                                        />

                                    </Flex>
                                </GridItem>
                                <GridItem>
                                    <Flex
                                        h="100%"
                                        justify="center" align="center"
                                    >
                                    </Flex>
                                </GridItem>
                            </Grid>

                        </Flex>
                    </GridItem>
                </Grid>
            </Flex>
        </Box>
    )
}

const MusicSelectList: React.FC<IMusicSelectList> = ({ data, number, showHeader, optionsTemplateColumns, middleOptionJustify, asDotOptionsIcon }) => {
    return <Box w="100%" >
        {showHeader && <Header optionsTemplateColumns={optionsTemplateColumns} middleOptionJustify={middleOptionJustify} />}
        <Grid templateColumns='repeat(1, 1fr)' gap={pixelToRem(41)} pt={pixelToRem(32)}  >
            {
                data?.map((item, index) =>
                    <GridItem
                        key={(i => i)(index)}
                    >
                        <SelectMusic optionsTemplateColumns={optionsTemplateColumns} middleOptionJustify={middleOptionJustify} asDotOptionsIcon={asDotOptionsIcon} number={number} index={index} {...{ ...item }} />
                    </GridItem>
                )
            }
        </Grid>
    </Box>
}


export default MusicSelectList