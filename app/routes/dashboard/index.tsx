import { Box,Flex, Grid, GridItem, Text, Icon, Image } from "@chakra-ui/react";
import {FaPlay} from 'react-icons/fa'
import {Wave} from '~/theme/Icons'

const index = () => {
    return (
        <Box>
          <Grid templateColumns={'repeat(12,1fr)'} mt={12} gap={12} p={8}>
            <Box as={GridItem} colSpan={8}>
              <Flex px={8}  bg="htGradient.2" rounded={'2xl'} h={66} w={'full'} align="center" justifyContent={'space-between'}>
                <Box>
                  <Text fontSize={12} color="white">Song of the week</Text>
                  <Text color="white" fontSize={24} fontWeight={'light'}>Happier Than Ever</Text>
                  <Text fontSize={14} color="white" mt={3}>By: Billie Elish</Text>
                  <Flex w={12} h={12} 
                        bg="rgba(255, 255, 255, 0.2)" 
                        mt={4} 
                        borderRadius={"full"} 
                        align={'center'} 
                        justify={'center'}
                        >
                    <Icon as={FaPlay} color={'white'}/>
                  </Flex>
                </Box>
                <Box>
                  <Image src={'/images/billie-removebg.png'} boxSize={'260px'} />
                </Box>
              </Flex>
            </Box>
            <Box as={GridItem} colSpan={4}>
              <Flex  bg="htIndigo.500" rounded={'2xl'} h={66} w={'full'} direction={'column'} overflow={'hidden'}>
                <Box mt={4} w="full" px={8} py={4}>
                  <Text fontSize={12} color="white">Continue</Text>
                  <Text color="white" fontSize={24} fontWeight={'light'}>Thriumphant</Text>
                  <Text fontSize={14} color="white" mt={3}>Olamide ft bella shurmuda</Text>
                  <Flex justify={'end'}>
                    <Flex w={12} h={12} 
                          bg="rgba(211, 11, 143, 0.2)"
                          borderRadius={"full"} 
                          align={'center'} 
                          justify={'center'}
                          >
                      <Icon as={FaPlay} color={'htPink.500'}/>
                    </Flex>
                  </Flex>
                </Box>
                <Box>
                  <Image src={'/images/svg-line.png'} h="100%" />
                </Box>
              </Flex>
            </Box>
          </Grid>
          <Box mt={8}>
            <Text fontSize={18} color="white" mb={8}>Top Trending</Text>
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
          <Box mt={8}>
            <Text fontSize={18} color="white" mb={8}>Recommended</Text>
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
    )
}

export default index
