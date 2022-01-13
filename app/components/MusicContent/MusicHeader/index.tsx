import { Box, Flex, Heading, Icon, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { pixelToRem } from '~/helpers/misc'
import { PlayPlug } from '~/theme/Icons'
import Tems from '~/assets/images/tems.png'
import OuterTems from '~/assets/images/outer-tems.png'


interface Props { }

const MusicHeader: React.FC = () => {
    return (
        <Box
            h={pixelToRem(452.12)}
            position="relative"
            w="100%" >
            <Image
                filter={"blur(40px)"}
                h={pixelToRem(452.12)}
                w="100%" src={OuterTems} />
            <Flex
                position="absolute" top={0} w="100%" h="100%"
                align="flex-end"
            >
                <Flex
                    bottom={0} pl={pixelToRem(42)} pb={pixelToRem(45.12)}>
                    <Box w="100%" >
                        <Flex
                            w="100%"
                            direction="row"
                        >
                            <Box
                                mr={pixelToRem(24)}
                            >

                                <Image w={pixelToRem(230)} h={pixelToRem(246)} src={Tems} />
                            </Box>
                            <Flex
                                direction="column"
                                pt={pixelToRem(30)}
                                pb={pixelToRem(20)}
                                h={pixelToRem(246)}
                            >
                                <Text
                                    fontFamily="Inter"
                                    fontWeight={400}
                                    fontSize={pixelToRem(18)}
                                    lineHeight={pixelToRem(21.78)}
                                    color="white"
                                >EP</Text>
                                <Heading
                                    fontFamily="Inter"
                                    fontWeight={400}
                                    fontSize={pixelToRem(48)}
                                    lineHeight={pixelToRem(58.09)}
                                    color="white"
                                >If Orange Was a Place</Heading>

                                <Text
                                    mt={pixelToRem(19)}
                                    mb={pixelToRem(32)}
                                    fontFamily="Inter"
                                    fontWeight={400}
                                    fontSize={pixelToRem(18)}
                                    lineHeight={pixelToRem(21.78)}
                                    color="white"
                                >
                                    <Text
                                        as="span"
                                        fontFamily="Inter"
                                        fontWeight={600}
                                        fontSize={pixelToRem(18)}
                                        lineHeight={pixelToRem(21.78)}
                                        color="white"
                                    >
                                        Tems
                                    </Text>
                                    . 2021  . 5 songs   . 20 minutes 4 secs
                                </Text>

                                <Flex
                                    justify={"center"}
                                    align="center"
                                    bg="#E743A6"
                                    w={pixelToRem(41)}
                                    h={pixelToRem(41)}
                                    borderRadius={pixelToRem(41)}
                                >
                                    <Icon color="white" as={PlayPlug} boxSize={4} />
                                </Flex>
                            </Flex>

                        </Flex>
                    </Box>
                </Flex>
            </Flex>
        </Box>
    )
}

export default MusicHeader