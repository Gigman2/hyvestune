import React from 'react';
import { Flex, Icon, IconButton, Box } from '@chakra-ui/react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { pixelToRem } from '~/helpers/misc';

interface IArrowButtonsProps {
  handleClick: (direction: number) => void;
  current: number;
  length: number;
  cols: number;
}

const ArrowButtons: React.FC<IArrowButtonsProps> = ({ handleClick, current, length, cols }) => {
  return (
    <Flex
      d={{ base: 'block', md: 'flex' }}
      textAlign={{ base: 'right', md: 'inherit' }}
      align="center"
      justify={{ md: 'space-between' }}
      pos="absolute"
      bg="transparent"
      top="50%"
      insetX={0}
      bottom={{ base: -14, md: '50%' }}
      w="100%"
      zIndex={30}
    >
      {current > 0 ? (
        <IconButton
          color="#fff"
          _hover={{ color: 'rgba(255, 255, 255, 0.12)' }}
          _focus={{ outline: 'none' }}
          boxShadow="xl"
          bg="rgba(255, 255, 255, 0.12)"
          w={pixelToRem(60)}
          h={pixelToRem(60)}
          borderRadius={pixelToRem(60)}
          aria-label="arrow button left"
          onClick={() => {
            handleClick(-1);
          }}
        >
          <Icon as={IoIosArrowBack} />
        </IconButton>
      ) : (
        <Box></Box>
      )}
      {length - cols > current ? (
        <IconButton
          w={pixelToRem(60)}
          h={pixelToRem(60)}
          borderRadius={pixelToRem(60)}
          color="#fff"
          _hover={{ color: 'rgba(255, 255, 255, 0.12)' }}
          _focus={{ outline: 'none' }}
          bg="rgba(255, 255, 255, 0.12)"
          boxShadow="xl"
          aria-label="arrow button right"
          onClick={() => {
            handleClick(+1);
          }}
        >
          <Icon opacity={1} color="white" as={IoIosArrowForward} />
        </IconButton>
      ) : (
        <Box></Box>
      )}
    </Flex>
  );
};

export default ArrowButtons;
