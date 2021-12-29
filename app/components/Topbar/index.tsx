import { Icon,Box, Flex, Text, Image,  } from "@chakra-ui/react";
import { Input } from "../Forms";
import { Bell } from "~/theme/Icons";
import {BiSearch} from 'react-icons/bi'


export default function Topbar() {
  return (
    <Flex  h="50px" w="100%" bg="transparent" align={'center'} justifyContent={'space-between'}>
      <Box h={12} w={'500px'} bg="whiteAlpha.300" rounded={'full'}>
        <Input
            color="white"
            inputIcon={BiSearch}
            mt={-1}
            h={12}
            bg={'transparent'}
            rounded={'full'} 
            w="full" 
            as={Input}
            required
            id="email" 
            onBlur={() => null}
            placeholder="Search content"
            value={''}
            error={''}
            touched={false}
            onChange={() => null}
            setFieldTouched={() => null}
          />
      </Box>
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
