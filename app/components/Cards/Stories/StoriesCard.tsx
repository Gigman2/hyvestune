import { Box, Avatar, Flex } from '@chakra-ui/react'
import React from 'react'
import { pixelToRem } from '~/helpers/misc'

interface IStoriesCardProps {
    avatarImage: string
    active: boolean
}

const StoriesCard: React.FC<IStoriesCardProps> = ({ avatarImage, active }) => {
    return <Box mr={pixelToRem(13)} p={pixelToRem(5)} border={active ? "1.5px solid #E743A6" : undefined} w={pixelToRem(80)} h={pixelToRem(80)} borderRadius={pixelToRem(70)} >
        <Flex
            w="100%" h="100%"
        >
            <Avatar src={avatarImage} w="100%" h="100%" />
        </Flex>
    </Box>
}

export default StoriesCard