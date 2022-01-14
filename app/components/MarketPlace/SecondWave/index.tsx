import { Box, Flex, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { pixelToRem } from '~/helpers/misc'
import { Confetti } from '~/theme/Icons'

interface Props { }

const SecondWave: React.FC = () => {
    return (
        <Flex p={pixelToRem(16)} w="100%">
            <Box w="100%" h={pixelToRem(200)} bg="#333333" borderRadius={pixelToRem(10)} >
                <Flex direction="column" h="100%" w="100%" justify="center" align="center" >
                    <Icon mb={pixelToRem(15.94)} h={pixelToRem(57.57)} w={pixelToRem(57.56)} color="#E743A6" as={Confetti} />
                    <Text
                        mb={pixelToRem(11)}
                        color="#828282"
                        fontFamily="Inter"
                        fontWeight={400}
                        fontSize={pixelToRem(14)}
                        lineHeight={pixelToRem(16.94)}
                    >
                        Congratulations you won the bidding on
                    </Text>
                    <Text
                        mb={pixelToRem(11)}
                        color="white"
                        fontFamily="Inter"
                        fontWeight={600}
                        fontSize={pixelToRem(16)}
                        lineHeight={pixelToRem(19.36)}
                    >
                        The Second Wave
                    </Text>
                    <Flex justify="center" align="center" w={pixelToRem(30)} h={pixelToRem(30)} borderRadius={pixelToRem(30)} bg="rgba(231, 67, 166, 0.12)" textAlign="center" >
                        <Icon boxSize={4} color="#E743A6" as={MdOutlineArrowForwardIos} />
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    )
}

export default SecondWave