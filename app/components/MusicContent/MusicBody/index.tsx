import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Top100Hits from '~/components/Explore/Top100Hits'
import MusicSelectList from '~/components/MusicSelectList'
import { pixelToRem } from '~/helpers/misc'
import Recommended from '~/components/Recommended';


interface IData {
    title: string
    artist: string,
}
interface IMusicBody {
    data?: IData[]
    asRecommended?: boolean
}

const MusicBody: React.FC<IMusicBody> = ({ data, asRecommended }) => {

    return <Box w="100%">
        <Box
            ml={pixelToRem(42)}
        >

            {data && data.length > 0 ? <MusicSelectList
                asDotOptionsIcon
                optionsTemplateColumns="30% 40% 30%"
                middleOptionJustify={"flex-end"}
                showHeader number={true} {...{ data }} /> : <Flex
                    w="100%"
                    alignItems="center"
                    justify="center"
                    mt={pixelToRem(81)}
                    mb={pixelToRem(234)}
                >
                <Text
                    color="white"
                    fontFamily="Inter"
                    fontWeight={400}
                    fontSize={pixelToRem(18)}
                    lineHeight={pixelToRem(21.78)}
                >
                    No songs on this playlist
                </Text>

            </Flex>}
        </Box>
        <Box ml={pixelToRem(42)} mt={pixelToRem(96)} >
            {!asRecommended && <Top100Hits headerLineHeight={pixelToRem(29.05)} headerFontWeight={600} headerFontSize={pixelToRem(24)} title="More by Tems" />}
            {asRecommended && <Recommended />}
        </Box>
    </Box>
}

export default MusicBody