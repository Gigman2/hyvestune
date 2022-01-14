import React from 'react'
import { Box, Flex, Heading } from '@chakra-ui/react'
import { pixelToRem } from '~/helpers/misc'
import MusicSelectList from '../MusicSelectList'

interface Props { }

const Recommended: React.FC = () => {

    const data = [
        {
            title: 'Found',
            artist: 'Tems ft Byrant'
        },
        {
            title: 'Replay',
            artist: 'Tems'
        }
    ]
    return <Box
        w="100%"
        mt={pixelToRem(198)}
    >
        <Flex w="100%" direction="column" >
            <Heading
                fontFamily="Inter"
                fontWeight={600}
                color="white"
                fontSize={pixelToRem(24)}
                lineHeight={pixelToRem(29.05)}
            >
                Recommended
            </Heading>
            <MusicSelectList {...{ data }} />
        </Flex>
    </Box >
}

export default Recommended