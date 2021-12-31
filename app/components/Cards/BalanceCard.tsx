import { Box, Flex, Heading, Icon, Text, Image } from '@chakra-ui/react'
import React from 'react'
import { BiDotsVertical } from 'react-icons/bi'
import { pixelToRem } from '~/helpers/misc'
import IOTA from '~/assets/images/iota.svg'

const BalanceCard = () => {
    return (
        <Box
            w="100%"
            h={pixelToRem(183)}
            bg="linear-gradient(94.38deg, #E743A6 0%, #12046B 112.92%)"
            borderRadius={pixelToRem(10)}
            p={pixelToRem(23)}
            position="relative"
        >
            <Flex direction="column" w="100%">
                <Flex w="100%" justify="space-between" direction="row" >
                    <Text
                    color="white"
                    fontWeight={400}
                    fontSize={pixelToRem(18)}
                    lineHeight={pixelToRem(21.78)}
                    >
                        your wallet balance
                    </Text>
                    <Box>
                        <Icon color="white" as={BiDotsVertical} boxSize={6} />
                    </Box>

                </Flex>
                <Box
                mt={pixelToRem(22)}
                >
                    <Heading
                    color="white"
                    letterSpacing={pixelToRem(2)}
                    fontWeight={700}
                    fontSize={pixelToRem(36)}
                    lineHeight={pixelToRem(43.57)}
                    >
                        $678890
                    </Heading>
                </Box>
                <Box bottom={pixelToRem(23)} right={pixelToRem(23)} position="absolute"  >
                    <Image w={pixelToRem(73)} h={pixelToRem(29)}  src={IOTA} />
                </Box>
            </Flex>
        </Box>
    )
}



export default BalanceCard
