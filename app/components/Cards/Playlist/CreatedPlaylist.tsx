import { Box, Flex, Grid, GridItem, Icon, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { pixelToRem } from '~/helpers/misc'
import { GrFavorite } from 'react-icons/gr'
import { Favorite } from '~/theme/Icons'
import MusicNote from '~/assets/images/music.svg'
interface ICreatedPlaylistProps {
    bg?: any
}

const CreatedPlaylist: React.FC<ICreatedPlaylistProps> = ({ bg }) => {
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
                        <Image
                            h={pixelToRem(36)}
                            w={pixelToRem(36)} src={MusicNote} />
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
                            First Playlist
                        </Text>
                    </Flex>
                </GridItem>
            </Grid>

        </Flex>
    </Box>
}

export default CreatedPlaylist