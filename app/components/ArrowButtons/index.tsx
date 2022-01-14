import React from 'react';
import { Flex, Icon, IconButton, Box } from '@chakra-ui/react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { pixelToRem } from '~/helpers/misc';

interface IArrowButtonsProps {
  handleClick: (direction: number) => void;
  current: number;
  length: number;
  cols: number;
  size?: any
  bg?: any
  _hover?: any
  iconSize?: any
}

const ArrowButtons: React.FC<IArrowButtonsProps> = ({ handleClick, current, length, cols, size, bg, _hover, iconSize }) => {
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
          _hover={_hover || { color: 'rgba(255, 255, 255, 0.12)' }}
          _focus={{ outline: 'none' }}
          boxShadow="xl"
          bg={bg || "rgba(255, 255, 255, 0.12)"}
          w={size || pixelToRem(60)}
          h={size || pixelToRem(60)}
          borderRadius={size || pixelToRem(60)}
          aria-label="arrow button left"
          onClick={() => {
            handleClick(-1);
          }}
        >
          <Icon as={IoIosArrowBack} boxSize={iconSize} />
        </IconButton>
      ) : (
        <Box></Box>
      )}
      {length - cols > current ? (
        <IconButton
          w={size || pixelToRem(60)}
          h={size || pixelToRem(60)}
          borderRadius={size || pixelToRem(60)}
          color="#fff"
          _hover={_hover || { color: 'rgba(255, 255, 255, 0.12)' }}
          _focus={{ outline: 'none' }}
          bg={bg || "rgba(255, 255, 255, 0.12)"}
          boxShadow="xl"
          aria-label="arrow button right"
          onClick={() => {
            handleClick(+1);
          }}
        >
          <Icon opacity={1} color="white" as={IoIosArrowForward} boxSize={iconSize} />
        </IconButton>
      ) : (
        <Box></Box>
      )}
    </Flex>
  );
};

export default ArrowButtons;
