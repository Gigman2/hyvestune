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
      w={{ base: width || '100%', '5xl': '100%' }}
      bg="black"
      align="center"
      justifyContent="space-between"
    >
      <Box h={12} w="500px" bg="whiteAlpha.300" rounded={'full'}></Box>
      <Flex align={'center'}>
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
