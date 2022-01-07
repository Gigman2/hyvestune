import { Box, Button, Flex, Grid, GridItem, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import Layout from '~/containers/layout/Layout'
import Music from '~/assets/images/music.svg'
import { pixelToRem } from '~/helpers/misc'
import useComponent from '~/context/component'

interface Props { }

const Playlist = () => {
    const { handleModalClick } = useComponent()
    return <Layout
        page={4}
        showHeader
    >
        <Flex
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
                        handleModalClick('new-playlist')
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
        </Flex>

    </Layout>
}

export default Playlist