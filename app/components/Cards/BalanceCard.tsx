import { Box, Flex, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { BiDotsVertical } from 'react-icons/all'
import { pixelToRem } from '~/helpers/misc'

const BalanceCard = () => {
    return (
        <Box
            w="100%"
            h={pixelToRem(183)}
            bg="linear-gradient(94.38deg, #E743A6 0%, #12046B 112.92%)"
            borderRadius={pixelToRem(10)}
            p={pixelToRem(23)}
        >
            <Flex direction="column" w="100%">
                <Flex w="100%" justify="space-between" direction="row" >
                    <Text>
                        your wallet balance
                    </Text>

                    <Box>
                        <Icon as={BiDotsVertical} />
                    </Box>

                </Flex>
            </Flex>
        </Box>
    )
}



export default BalanceCard
