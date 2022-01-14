import { Box, Button, Flex, Grid, GridItem, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import Layout from '~/containers/layout/Layout'
import Music from '~/assets/images/music.svg'
import { pixelToRem } from '~/helpers/misc'
import useComponent from '~/context/component'
import LikedPlaylist from '~/components/Cards/Playlist/LikedPlaylist'
import CreatedPlaylist from '~/components/Cards/Playlist/CreatedPlaylist'
import NewPlaylist from '~/components/Cards/Playlist/NewPlaylist'

interface Props { }

const Playlist = () => {
    const [open, setOpen] = React.useState<boolean>(false)
    const { handleModalClick } = useComponent()
    return <Layout
        page={4}
        showHeader
    >
        {!open && <Flex
            h="100%"
            w="100%" align="center" justify="center" direction="column" >
            <Flex w="50%"
                align="center"
                justify="center"
                direction="column" >
                <Image
                    w={pixelToRem(35)}
                    h={pixelToRem(43.75)}
                    src={Music} boxSize={8} />
                <Heading
                    mt={pixelToRem(48.75)}
                    fontSize={pixelToRem(24)}
                    lineHeight={pixelToRem(29.05)}
                    fontWeight={600}
                    color="white"
                >
                    Create your First Playlist
                </Heading>
                <Button
                    onClick={() => {
                        handleModalClick('new-playlist', { func: setOpen })
                    }}
                    _focus={{ outline: 'none' }}
                    _hover={{ outline: 'none' }}
                    bg="white"
                    color="black"
                    boxShadow="10px 10px 20px rgba(18, 4, 107, 0.12)"
                    mt={pixelToRem(36)}
                    w={pixelToRem(261)}
                    h={pixelToRem(58)}
                    borderRadius={pixelToRem(8)}
                >
                    Create
                </Button>
            </Flex>
        </Flex>}
        {open && <Box w="100%"
            mt={{ xl: pixelToRem(164) }}
        >
            <Flex
                direction="column"
                w="100%"
                pl={pixelToRem(73)}
            >

                <Grid
                    py={3}
                    gap={{ base: pixelToRem(54), '5xl': pixelToRem(80) }}
                    w="100%"
                    templateColumns={'repeat(4,1fr)'}
                >

                    <GridItem>
                        <LikedPlaylist bg="linear-gradient(144.19deg, #E743A6 2%, #12046B 144.79%)" />
                    </GridItem>
                    <GridItem>
                        <CreatedPlaylist bg="#333333" />
                    </GridItem>
                    <GridItem>
                        <NewPlaylist bg="transparent" onClick={() => handleModalClick('new-playlist', { func: setOpen })} />
                    </GridItem>
                </Grid>
            </Flex>

        </Box>}

    </Layout>
}

export default Playlist