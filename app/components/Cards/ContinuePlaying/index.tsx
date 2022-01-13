import { Box, Flex, Heading, Icon, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { pixelToRem } from '~/helpers/misc'
import Curvy from '~/assets/images/Servy.svg'
import { Curves, PlayPlug } from '~/theme/Icons'

interface Props { }

const ContinuePlaying = () => {
    return <Box
        h={pixelToRem(269)}
        borderRadius={pixelToRem(20)}
        bg="#12046B"
        overflow="hidden"
    >
        <Flex
            w="100%"
            direction="column"
            borderTopRadius={pixelToRem(20)}
        >
            <Flex
                w="100%"
                direction="column"
            >
                <Box
                    mt={pixelToRem(41)}
                    ml={pixelToRem(22)}
                    w="100%"
                >
                    <Text
                        fontFamily="Lato"
                        fontWeight={600}
                        color="white"
                        fontSize={pixelToRem(14)}
                        lineHeight={pixelToRem(16.8)}
                        mb={pixelToRem(9)}
                    >
                        Continue
                    </Text>
                    <Heading
                        fontFamily="Lato"
                        fontWeight={600}
                        color="white"
                        fontSize={pixelToRem(18)}
                        lineHeight={pixelToRem(21.6)}
                        mb={pixelToRem(16)}
                    >
                        Thriumphant
                    </Heading>
                    <Text
                        fontFamily="Lato"
                        fontWeight={600}
                        color="white"
                        fontSize={pixelToRem(13)}
                        lineHeight={pixelToRem(15.6)}
                    >
                        Olamide ft bella shurmuda
                    </Text>

                    <Flex
                        w="100%"
                        alignItems="center"
                        justifyContent="flex-end"
                    >
                        <Flex
                            mr={pixelToRem(64)}
                            justify={"center"}
                            align="center"
                            bg="rgba(255, 255, 255, 0.2)"
                            w={pixelToRem(41)}
                            h={pixelToRem(41)}
                            borderRadius={pixelToRem(41)}
                        >
                            <Icon color="#E743A6" as={PlayPlug} boxSize={4} />
                        </Flex>
                    </Flex>
                </Box>



            </Flex>
            <Image w="100%" src={Curvy} h={"100%"} />
        </Flex>
    </Box>
}

export default ContinuePlaying