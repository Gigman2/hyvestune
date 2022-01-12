import { Icon, Box, Flex, Text, Image } from '@chakra-ui/react';
import React from 'react';
import { pixelToRem } from '~/helpers/misc';
import { Bell } from '~/theme/Icons';
interface ITopBarProps {
  width?: string | number;
}
const TopBar: React.FC<ITopBarProps> = ({ width }) => {
  return (
    <Flex
      py={pixelToRem(46)}
      pr={pixelToRem(61)}
      pl={pixelToRem(42)}
      bg="black"
      w="85%"
      align="center"
      justifyContent="space-between"
    >
      <Box w="35%" h={12} bg="whiteAlpha.300" rounded={'full'}></Box>
      <Flex justifyContent="flex-end" w="50%" align={'center'}>
        <Box pos={'relative'} mr={8}>
          <Box bg="red.400" w={2} h={2} right={1} rounded={'full'} pos={'absolute'}></Box>
          <Icon as={Bell} color={'white'} boxSize={6} />
        </Box>
        <Text color="white" mr={8}>
          John Doe
        </Text>
        <Image src={'/images/Oval.png'} boxSize={12} />
      </Flex>
    </Flex>
  );
};

export default TopBar;
