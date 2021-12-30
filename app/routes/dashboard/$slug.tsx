import { Text, Box, Image, Flex, Icon } from "@chakra-ui/react";
import {FaPlay} from 'react-icons/fa'

const Playing = () => {
    return (
        <Box h={36} w={'full'}  pos="relative" zIndex={6} top={-32}>
            <Box w={'full'} pos={'absolute'} zIndex={7} h={110} overflow='hidden'>
                <Box bg={"url(/images/blue-full-1.jpg)"} w={'100%'} h={'100%'} 
                    bgRepeat={'no-repeat'} 
                    bgSize={'cover'} 
                    bgPosition={'center'} 
                    >
                    <Box  background={'linear-gradient(0deg, #121111 27.37%, rgba(196, 196, 196, 0) 89.2%)'} backdropFilter='blur(10px)' w={'full'} h={'full'}></Box>
                </Box>
            </Box>
            <Box pos={'relative'} top={28} zIndex={8} p={8}>
                <Flex w="full">
                    <Box w={48} h={48} mr={8}>
                        <Image src="/images/blue-3.png" />
                    </Box>
                    <Box color="white" mt={6}>
                        <Text mb={0}>Ep</Text>
                        <Text fontSize={36} mt={0}>If Orange Was a Place</Text>
                        <Text mt={3}>Tems .2021 .5 songs .20 minutes 4 secs</Text>
                        <Flex w={10} h={10} 
                                bg="htPink.500" 
                                mt={4} 
                                borderRadius={"full"} 
                                align={'center'} 
                                justify={'center'}
                                >
                            <Icon as={FaPlay} color={'white'}  boxSize={4}/>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}

export default Playing