import React from 'react'
import { Box, Flex, Grid, GridItem, Heading, Icon, Image, Text } from '@chakra-ui/react'
import { pixelToRem } from '~/helpers/misc'
import Billie from '~/assets/images/billie.png'
import { PlayPlug } from '~/theme/Icons'

interface Props { }

const SongOfTheWeek: React.FC = () => {
    return <Box
        w={"100%"}
        h={pixelToRem(269)}
        pl={pixelToRem(39)}
        borderRadius={pixelToRem(20)}
        bg="linear-gradient(96.65deg, #D30B8F 1.51%, rgba(211, 11, 143, 0.58) 130.45%)"
    >
        <Grid
            templateColumns="60% 40%"
            gap={3}
            w="100%"
        >
            <GridItem>
                <Flex direction="column"
                    pt={pixelToRem(62)}
                    pb={pixelToRem(29)}
                >
                    <Text
                        fontWeight={600}
                        color="white"
                        fontSize={pixelToRem(14)}
                        lineHeight={pixelToRem(16.8)}
                        mb={pixelToRem(9)}
                    >
                        Song of the Week
                    </Text>
                    <Heading
                        fontWeight={400}
                        color="white"
                        fontSize={pixelToRem(36)}
                        lineHeight={pixelToRem(43.2)}
                        mb={pixelToRem(18)}
                    >
                        Happier Than Ever
                    </Heading>
                    <Text
                        fontWeight={400}
                        color="white"
                        fontSize={pixelToRem(18)}
                        lineHeight={pixelToRem(21.6)}
                        mb={pixelToRem(29)}
                    >
                        By: Billie Elish
                    </Text>

                    <Flex
                        justify={"center"}
                        align="center"
                        bg="rgba(255, 255, 255, 0.2)"
                        w={pixelToRem(41)}
                        h={pixelToRem(41)}
                        borderRadius={pixelToRem(41)}
                    >
                        <Icon color="white" as={PlayPlug} boxSize={4} />
                    </Flex>
                </Flex>
            </GridItem>

            <GridItem pr={{ xl: pixelToRem(38), "5xl": 'auto' }}>
                <Image h="100%" src={Billie} />
            </GridItem>
        </Grid>
    </Box >
}

export default SongOfTheWeek