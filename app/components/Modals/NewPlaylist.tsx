import { Box, Flex, Heading, Input } from '@chakra-ui/react'
import React from 'react'
import useComponent from '~/context/component'
import { pixelToRem } from '~/helpers/misc'
import Button from '../Button'
import ModalWrapper from './ModalWrapper'

interface Props { }

const NewPlaylist = () => {
    const { isOpen, onClose, data } = useComponent()
    return <ModalWrapper
        isCentered size='2xl' isOpen={isOpen} onClose={onClose}
    >
        <Flex
            direction='row'
            align='center'
            justify='center'
            w="100%"
            mb={pixelToRem(48)}
        >

            <Heading
                color="white"
                lineHeight={pixelToRem(16.94)}
                fontWeight={600}
                fontSize={pixelToRem(14)}
            >
                Create Playlist
            </Heading>

        </Flex>

        <Flex
            w="100%"
            align="center"
            justify="center"
        >
            <Input
                borderRadius={pixelToRem(5)}
                borderColor="white"
                borderWidth={pixelToRem(2)}
                w="90%"
                h={pixelToRem(50)}
                placeholder="Enter name"
            />
        </Flex>

        <Box mb={pixelToRem(138)} w="100%" textAlign="center" >
            <Button
                _focus={{ outline: 'none' }}
                _hover={{ outline: 'none' }}
                title="Create" w={pixelToRem(261)} h={pixelToRem(58)} mt={pixelToRem(86)} />
        </Box>
    </ModalWrapper>
}

export default NewPlaylist