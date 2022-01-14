import { Avatar, Box, Flex, Heading, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { BiDotsVertical } from 'react-icons/bi'
import { pixelToRem } from '~/helpers/misc'

interface INRFsHistoryCardProps {
    cost: number
    title: string
    artist: string
    image: string
}


const NFTsHistoryCard: React.FC<INRFsHistoryCardProps> = ({ cost, title, artist, image }) => {

    return (
        <Box p={pixelToRem(9)} w="100%" bg="rgba(255, 255, 255, 0.12)" borderRadius={pixelToRem(5)} h={pixelToRem(60)} >
            <Flex direction="row" w="100%" h="100%" >
                <Flex
                    w="50%"
                    justifyContent="flex-start"
                    direction="row"
                    align="center"
                >
                    <Box
                        w="30%"
                    >
                        <Avatar src={image} />
                    </Box>
                    <Flex w="70%"
                        ml={pixelToRem(12)}
                        direction="column" >
                        <Heading
                            mb={pixelToRem(6)}
                            fontFamily="Inter"
                            fontWeight={600}
                            fontStyle="normal"
                            fontSize={pixelToRem(14)}
                            lineHeight={pixelToRem(16.94)}
                            color="white"
                        >
                            {title}
                        </Heading>
                        <Text
                            color="#828282"
                            fontFamily="Inter"
                            fontWeight={400}
                            fontStyle="normal"
                            fontSize={pixelToRem(12)}
                            lineHeight={pixelToRem(14.52)}
                        >
                            {artist}
                        </Text>
                    </Flex>
                </Flex>
                <Flex justify="flex-end" w="50%" align="center"  >
                    <Heading
                        mr={pixelToRem(41)}
                        color="#35B907"
                        fontFamily="Inter"
                        fontWeight={400}
                        fontStyle="normal"
                        fontSize={pixelToRem(16)}
                        lineHeight={pixelToRem(19.36)}
                    >${cost}</Heading>
                    <Icon color="white" as={BiDotsVertical} />
                </Flex>
            </Flex>
        </Box>
    )
}


export default NFTsHistoryCard