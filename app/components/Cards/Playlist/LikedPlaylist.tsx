import { Box, Flex, Grid, GridItem, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { pixelToRem } from '~/helpers/misc'
import { GrFavorite } from 'react-icons/gr'
import { Favorite } from '~/theme/Icons'
interface ILikedPlaylistProps {
    bg?: any
}

const LikedPlaylist: React.FC<ILikedPlaylistProps> = ({ bg }) => {
    return <Box h={pixelToRem(246)} cursor="pointer" borderRadius={pixelToRem(20)} bg={bg} >
        <Flex w="100%"
            h="100%"
            justifyContent="center"
            alignItems="center"
            direction="column"
        >
            <Grid gap={pixelToRem(22.22)} templateColumns="repeat(1, 1fr)" >
                <GridItem>
                    <Flex w="100%" alignItems="center" justifyContent="center" >
                        <Icon as={Favorite} color="white" boxSize={6} />
                    </Flex>
                </GridItem>
                <GridItem>
                    <Flex w="100%" alignItems="center" justifyContent="center" >
                        <Text textAlign={'center'}
                            fontWeight={600}
                            color="white"
                            fontSize={pixelToRem(24)}
                            lineHeight={pixelToRem(29.05)}
                        >
                            0
                        </Text>
                    </Flex>
                </GridItem>
                <GridItem>
                    <Flex w="100%" alignItems="center" justifyContent="center" >
                        <Text textAlign={'center'}
                            fontWeight={400}
                            color="white"
                            fontSize={pixelToRem(18)}
                            lineHeight={pixelToRem(21.78)}
                        >
                            liked songs
                        </Text>
                    </Flex>
                </GridItem>
            </Grid>

        </Flex>
    </Box>
}

export default LikedPlaylist