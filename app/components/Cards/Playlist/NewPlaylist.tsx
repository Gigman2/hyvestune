import { Box, Flex, Grid, GridItem, Icon, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { pixelToRem } from '~/helpers/misc'
import { BiPlus } from 'react-icons/bi'
interface INewPlaylistProps {
    bg?: any
    onClick?: () => void
}

const NewPlaylist: React.FC<INewPlaylistProps> = ({ bg, onClick }) => {
    return <Box
        onClick={onClick}
        border="2px dashed #fff"
        backgroundSize="2px 3px"
        spacing={2}
        h={pixelToRem(246)} cursor="pointer" borderRadius={pixelToRem(20)} bg={bg} >
        <Flex w="100%"
            h="100%"
            justifyContent="center"
            alignItems="center"
            direction="column"
        >
            <Grid gap={pixelToRem(47.83)} templateColumns="repeat(1, 1fr)" >
                <GridItem>
                    <Flex w="100%" alignItems="center" justifyContent="center" >
                        <Flex
                            borderWidth={pixelToRem(2)}
                            w={pixelToRem(58.33)}
                            h={pixelToRem(58.33)}
                            borderRadius={pixelToRem(58.33)}
                            justify="center"
                            align="center"
                        >
                            <Icon color="white" as={BiPlus} boxSize={6} />
                        </Flex>
                    </Flex>
                </GridItem>
                <GridItem>
                    <Flex w="100%" alignItems="center" justifyContent="center" >
                        <Text textAlign={'center'}
                            fontWeight={600}
                            color="white"
                            fontSize={pixelToRem(18)}
                            lineHeight={pixelToRem(21.78)}
                        >
                            New Playlist
                        </Text>
                    </Flex>
                </GridItem>
            </Grid>

        </Flex>
    </Box>
}

export default NewPlaylist