import { Text, Box, Image, Flex, Icon, Grid, GridItem } from "@chakra-ui/react";
import {FC, useRef, useState } from 'react';
import {FaPlay} from 'react-icons/fa'
import { Clock, Heart } from "~/theme/Icons";
import  {FiMoreVertical} from 'react-icons/fi'
import { useHover } from "usehooks-ts";


const SongItem:FC<{item: number, active: number, setActive: (p:number) => void}> = ({item, active, setActive}) => {
    const hoverRef = useRef(null)
    const isHover = useHover(hoverRef)

    return (
    <Grid as={Flex} align="center" templateColumns={'repeat(16,1fr)'} gap={1} h={20} mb={4} cursor="pointer"
        bg={active === item || isHover ? 'rgba(255, 255, 255, 0.12)' : 'transparent'}
        ref={hoverRef} onClick={() => setActive(item)}>
        <Box as={GridItem} colSpan={1} p={4}>
            {active === item || isHover ? <Icon as={FaPlay}/> : item}
        </Box>
        <Box as={GridItem} colSpan={12} px={4}>
            <Flex direction="column">
                <Text>Found</Text>
                <Text fontWeight={200}>Tems ft Byrant</Text>
            </Flex>
        </Box>
        <Box as={GridItem} colSpan={1} p={4}>
            {active === item || isHover && <Icon as={Heart} ml={3} mt={1} />}
        </Box>
        <Flex as={GridItem} colSpan={1} p={4} justify={'end'}>
            3.04
        </Flex>
        <Box as={GridItem} colSpan={1} p={4}>
            {(active === item || isHover) && <Icon as={FiMoreVertical} ml={3} mt={1} />}
        </Box>
    </Grid>)
}


const Playing = () => {
    const List = [1,2,3,4,5,6]
    const [active, setActive] = useState(1)
   
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
            <Box pos={'relative'} top={28} zIndex={8} >
                <Flex w="full" p={8}>
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
               <Box mt={8} color="white" p={8} bg="#121111">
                    <Grid as={Flex} align="center" templateColumns={'repeat(16,1fr)'} gap={10} h={16} mb={4}>
                        <Box as={GridItem} colSpan={1} p={4}>#</Box>
                        <Box as={GridItem} colSpan={12} p={4}>Title</Box>
                        <Box as={GridItem} colSpan={1} p={4}></Box>
                        <Flex as={GridItem} colSpan={1} p={4} justify={'end'}>
                            <Icon as={Clock} color="white"/>
                        </Flex>
                        <Box as={GridItem} colSpan={1} p={4}></Box>
                    </Grid>
                    {List.map(item => (
                        <SongItem item={item} active={active} setActive={setActive}/>
                    ))}
                    
               </Box>
               <Box  color="white" p={8} bg="#121111">
                <Text fontSize={18} color="white" mb={8}>More by Tems</Text>
                <Grid templateColumns={'repeat(12,1fr)'} gap={10}>
                    <Box as={GridItem} colSpan={3}>
                    <Box mb={4}>
                        <Image src={'/images/blue-1.png'}/>
                    </Box>
                    <Text color={'white'} fontSize={15}>Sinking Hole</Text>
                    <Text color="whiteAlpha.500" fontSize={14}>Damien Marley</Text>
                    </Box>
                    <Box as={GridItem} colSpan={3}>
                    <Box>
                        <Image src={'/images/blue-2.png'}/>
                    </Box>
                    <Text color={'white'} fontSize={15}>Colored Pills</Text>
                    <Text color="whiteAlpha.500" fontSize={14}>Billie Ellish</Text>
                    </Box>
                    <Box as={GridItem} colSpan={3}>
                    <Box>
                        <Image src={'/images/blue-3.png'}/>
                    </Box>
                    <Text color={'white'} fontSize={15}>Crazy Things</Text>
                    <Text color="whiteAlpha.500" fontSize={14}>Tems</Text>
                    </Box>
                    <Box as={GridItem} colSpan={3}>
                    <Box>
                        <Image src={'/images/blue-4.png'}/>
                    </Box>
                    <Text color={'white'} fontSize={15}>Human Mind</Text>
                    <Text color="whiteAlpha.500" fontSize={14}>Jon Bellion</Text>
                    </Box>
                </Grid>
               </Box>
            </Box>
        </Box>
    )
}

export default Playing