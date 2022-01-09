import React from 'react'
import { Box, Flex, Grid, GridItem, Heading } from '@chakra-ui/react'
import { pixelToRem } from '~/helpers/misc'
import SelectMusic from '../Cards/SelectMusic'

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
    return <Box w="100%" mt={pixelToRem(198)}>
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
            <Grid templateColumns='repeat(1, 1fr)' gap={pixelToRem(45)} pt={pixelToRem(32)}  >
                {
                    data?.map((item, index) =>
                        <GridItem
                            key={(i => i)(index)}
                        >
                            <SelectMusic {...{ ...item }} />
                        </GridItem>
                    )
                }
            </Grid>
        </Flex>
    </Box >
}

export default Recommended