import React, { ReactNode } from 'react'
import { Box, Flex, Grid, GridItem, Heading, Icon, Image, Text } from '@chakra-ui/react'
import { pixelToRem } from '~/helpers/misc'
import { PlayPlug } from '~/theme/Icons'

interface Props { 
    color?: string
    image?: string
    context?: {
        heading: string
        main: string
        subtext: string
        otherText?: string
        icon?: ReactNode
    }
}

const DoubleWBanner: React.FC<Props> = ({color, image, context}) => {
    return <Box
        w={"100%"}
        h={pixelToRem(269)}
        borderRadius={pixelToRem(20)}
        overflow={'hidden'}
        bg={color}
    >
        <Grid
            templateColumns="55% 45%"
            gap={3}
            w="100%"
        >
            <GridItem>
                <Flex direction="column"
                    pt={pixelToRem(62)}
                    pb={pixelToRem(29)}
                    pl={pixelToRem(39)}

                >
                    <Text
                        fontFamily="Lato"
                        fontWeight={600}
                        color="white"
                        fontSize={pixelToRem(14)}
                        lineHeight={pixelToRem(16.8)}
                        mb={pixelToRem(9)}
                    >
                       {context?.heading}
                    </Text>
                    <Heading
                        fontFamily="Lato"
                        fontWeight={400}
                        color="white"
                        fontSize={pixelToRem(36)}
                        lineHeight={pixelToRem(43.2)}
                        mb={pixelToRem(18)}
                    >
                       {context?.main}
                    </Heading>
                    <Text
                        fontFamily="Lato"
                        fontWeight={400}
                        color="white"
                        fontSize={pixelToRem(18)}
                        lineHeight={pixelToRem(21.6)}
                        mb={pixelToRem(29)}
                    >
                        {context?.subtext}
                    </Text>

                    {
                        context?.otherText ?  
                            <Text
                                fontFamily="Lato"
                                fontWeight={400}
                                color="white"
                                fontSize={pixelToRem(18)}
                                lineHeight={pixelToRem(21.6)}
                                mt={pixelToRem(10)}
                            >
                                {context?.otherText}
                            </Text> 
                        : 
                        context?.icon ?
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
                        : null
                    }
                </Flex>
            </GridItem>

            <GridItem>
                <Flex justifyContent={'end'}>
                    <Image h={'100%'} src={image} />
                </Flex>
            </GridItem>
        </Grid>
    </Box >
}

export default DoubleWBanner