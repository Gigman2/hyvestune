import { Box, Flex, Grid, GridItem, Heading, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { pixelToRem, } from '~/helpers/misc'
import useHover from '~/hooks/useHover'
import { BiDotsVertical } from 'react-icons/bi'
import { Favorite, PlayPlug, PlusCircle, } from '~/theme/Icons'

interface Props {
    title?: string
    artist?: string
    index?: number
    number?: boolean
    optionsTemplateColumns?: any
    middleOptionJustify?: any
    asDotOptionsIcon?: boolean
}

const SelectMusic: React.FC<Props> = ({ title, artist, index, number, optionsTemplateColumns, middleOptionJustify, asDotOptionsIcon }) => {
    const ref = React.useRef(null)
    const value = useHover(ref)

    return <Box h={pixelToRem(73)} w="90%" mr={12} _hover={{ bg: 'rgba(255, 255, 255, 0.12)', }} ref={ref} {...{ px: pixelToRem(18.61), py: pixelToRem(12), borderRadius: pixelToRem(5) }} >
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
                            <GridItem>
                                <Flex
                                    h="100%"
                                    align="center"
                                    justify="center"
                                    color="white"
                                    cursor={"pointer"}
                                >
                                    {value && <Icon cursor="pointer" color="white" as={PlayPlug} mr={pixelToRem(43.99)} />}
                                    {!value && number && typeof index === "number" ? <Text as="span"
                                        mr={pixelToRem(43.99)}
                                        fontFamily="Inter"
                                        color="white"
                                        fontWeight={400}
                                        lineHeight={{ md: pixelToRem(18) }}
                                        fontSize={{ md: pixelToRem(21.78) }}
                                    >
                                        {index + 1}
                                    </Text> : null}
                                </Flex>
                            </GridItem>
                            <GridItem>
                                <Flex direction="column" >
                                    <Heading
                                        fontFamily="Inter"
                                        color="white"
                                        fontWeight={600}
                                        lineHeight={{ md: pixelToRem(21.78) }}
                                        fontSize={{ md: pixelToRem(18) }}
                                    >
                                        {title}
                                    </Heading>
                                    <Text
                                        fontFamily="Inter"
                                        fontWeight={400}
                                        lineHeight={{ md: pixelToRem(21.78) }}
                                        fontSize={{ md: pixelToRem(18) }}
                                        mt={pixelToRem(7)}
                                        color="white"
                                    >
                                        {artist}
                                    </Text>
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
                                    cursor={"pointer"}
                                >
                                    {value && <Icon cursor="pointer" as={Favorite} boxSize={6} />}
                                </Flex>
                            </GridItem>
                            <GridItem>
                                <Flex
                                    h="100%"
                                    justify={middleOptionJustify || "center"} align="center"
                                >

                                    <Text

                                        fontFamily="Inter"
                                        fontWeight={400}
                                        lineHeight={{ md: pixelToRem(21.78) }}
                                        fontSize={{ md: pixelToRem(18) }}
                                        mt={pixelToRem(7)}
                                        color="white"
                                    >
                                        3.04
                                    </Text>
                                </Flex>
                            </GridItem>
                            <GridItem>
                                <Flex
                                    cursor={"pointer"}
                                    h="100%"
                                    justify="center" align="center"
                                >
                                    {value && <Icon cursor="pointer" color="white" as={asDotOptionsIcon ? BiDotsVertical : PlusCircle} boxSize={6} />}
                                </Flex>
                            </GridItem>
                        </Grid>

                    </Flex>
                </GridItem>
            </Grid>
        </Flex>
    </Box>
}

export default SelectMusic