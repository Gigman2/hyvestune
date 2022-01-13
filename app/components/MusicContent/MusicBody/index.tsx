import { Box } from '@chakra-ui/react'
import React from 'react'
import Top100Hits from '~/components/Explore/Top100Hits'
import MusicSelectList from '~/components/MusicSelectList'
import { pixelToRem } from '~/helpers/misc'

interface Props { }

const MusicBody: React.FC = () => {
    const data = [
        {
            title: 'Found',
            artist: 'Tems ft Byrant'
        },
        {
            title: 'Replay',
            artist: 'Tems'
        },
        {
            title: 'Avoid Things',
            artist: 'Tems'
        },
        {
            title: 'Crazy Things',
            artist: 'Tems'
        },
        {
            title: 'Vibe Out',
            artist: 'Tems'
        }

    ]
    return <Box w="100%">
        <Box
            ml={pixelToRem(42)}
        >

            <MusicSelectList
                asDotOptionsIcon
                optionsTemplateColumns="30% 40% 30%"
                middleOptionJustify={"flex-end"}
                showHeader number={true} {...{ data }} />
        </Box>
        <Box mt={pixelToRem(96)} >
            <Top100Hits headerLineHeight={pixelToRem(29.05)} headerFontWeight={600} headerFontSize={pixelToRem(24)} title="More by Tems" />
        </Box>
    </Box>
}

export default MusicBody