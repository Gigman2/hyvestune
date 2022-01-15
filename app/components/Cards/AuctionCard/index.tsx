import { Box, Flex, Icon, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { pixelToRem } from '~/helpers/misc'
import { Favorite } from '~/theme/Icons'

interface IAuctionCardProps {
    image: string
    title?: string
    cost?: number
    artist?: string
}

const AuctionCard: React.FC<IAuctionCardProps> = ({ image, title, cost, artist }) => {
    return <Box
        w="100%"
        h={{ md: pixelToRem(270), "5xl": pixelToRem(281) }}
        bg="#333333"
        borderRadius={pixelToRem(20)}
        p={pixelToRem(10)}
    >
        <Flex direction="column" w="100%" >
            <Box w="100%" position="relative" >
                <Image h={{ md: pixelToRem(215), "5xl": pixelToRem(215) }} w="100%" src={image} />
                <Box w="100%" position="absolute" h={pixelToRem(215)} top={0} >
                    <Flex w="100%" direction="column" h={"100%"} py={pixelToRem(9)} px={pixelToRem(13)} justify="space-between" >
                        <Box w="100%" >
                            <Flex w="100%"
                                justify="flex-end"
                            >
                                <Flex
                                    p={2}
                                    mt={pixelToRem(8)}
                                    mr={pixelToRem(13)}
                                    alignItems="center"
                                    justifyContent="center"
                                    backdropFilter="blur(61px)"
                                    w={pixelToRem(25)}
                                    h={pixelToRem(25)}
                                    bg="linear-gradient(270.4deg, rgba(251, 251, 251, 0.252) 0.44%, rgba(227, 227, 227, 0.156) 111.15%)"
                                    borderRadius={pixelToRem(25)}
                                >
                                    <Icon color="white" as={Favorite} boxSize={4} />
                                </Flex>

                            </Flex>
                        </Box>
                        <Box w="100%">
                            <Flex
                                borderRadius={pixelToRem(10)}
                                backdropFilter="blur(61px)"
                                bg="linear-gradient(270.4deg, rgba(251, 251, 251, 0.252) 0.44%, rgba(227, 227, 227, 0.156) 111.15%)"
                            >
                                <Flex px={pixelToRem(8)} h={pixelToRem(46)} w="100%" alignItems="center" justifyContent="space-between" >
                                    <Text
                                        fontFamily="Inter"
                                        fontWeight={500}
                                        fontSize={12}
                                        lineHeight={14.52}
                                        color="white"
                                    >
                                        {title}
                                    </Text>
                                    <Text
                                        pr={pixelToRem(12)}
                                        fontFamily="Inter"
                                        fontWeight={600}
                                        fontSize={12}
                                        lineHeight={14.52}
                                        color="white"
                                    >
                                        ${cost}
                                    </Text>
                                </Flex>
                            </Flex>
                        </Box>
                    </Flex>
                </Box>
            </Box>
            <Flex w="100%" align="center" justify="space-between" h={pixelToRem(53)} >
                <Text
                    fontFamily="Inter"
                    color="#E743A6"
                    fontWeight={300}
                    fontStyle="normal"
                    fontSize={pixelToRem(14)}
                    lineHeight={16.94}
                >
                    2days : 14hours : 50sec
                </Text>
                <Text
                    fontFamily="Inter"
                    color="white"
                    fontWeight={600}
                    fontStyle="normal"
                    fontSize={pixelToRem(12)}
                    lineHeight={14.52}
                >
                    {artist}
                </Text>
            </Flex>
        </Flex>

    </Box>
}

export default AuctionCard