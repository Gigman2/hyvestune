import { Icon,Box, Flex, Text, Image,  } from "@chakra-ui/react";
import { Bell } from "~/theme/Icons";
export default function Topbar() {
  return (
    <Flex  h="50px" w="100%" bg="black" align={'center'} justifyContent={'space-between'}>
      <Box h={12} w={'500px'} bg="whiteAlpha.300" rounded={'full'}></Box>
      <Flex align={'center'}> 
        <Box pos={'relative'} mr={8}>
            <Box bg="red.400" w={2} h={2} right={1} rounded={'full'} pos={'absolute'}></Box>
            <Icon as={Bell} color={'white'} boxSize={6}/>
        </Box>
        <Text color="white" mr={8}>John Doe</Text>
        <Image src={'/images/Oval.png'} boxSize={16}/>
      </Flex>
    </Flex>
  );
}
