import { Box, Flex, GridItem, Heading } from '@chakra-ui/react'
import React from 'react'
import { pixelToRem } from '~/helpers/misc'
import { motion } from 'framer-motion';
import useMotionSlide from '~/hooks/useMotionSilide';
const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
const MotionFlex = motion(Flex);
import AnotherMan from '~/assets/images/anotherMan.png'
import Boy from '~/assets/images/boy.png'
import Dark from '~/assets/images/dark.png'
import Eomsn from '~/assets/images/eomsn.png'
import Man from '~/assets/images/man.png'
import Little from '~/assets/images/little.png'
import Sto from '~/assets/images/sto.png'
import StoriesCard from '~/components/Cards/Stories/StoriesCard';
import ArrowButtons from '~/components/ArrowButtons';


interface Props { }

const TrendingCreators: React.FC = () => {
    const data = [
        { avatarImage: Eomsn, active: true },
        { avatarImage: Man, active: true },
        { avatarImage: Little, active: true },
        { avatarImage: Boy, active: false },
        { avatarImage: AnotherMan, active: false },
        { avatarImage: Sto, active: false },
        { avatarImage: Dark, active: true },
    ]
    const { currentSlide, isMobile, handleClick } = useMotionSlide({ data });
    return (
        <Flex w="100%" direction="column" >
            <Box w="100%"
                overflowX="hidden" maxW={{ base: '100%' }} pos="relative"
            >
                <Heading
                    pt={pixelToRem(5)}
                    fontSize={pixelToRem(18)}
                    fontWeight={600}
                    lineHeight={pixelToRem(21.78)}
                    fontStyle="normal"
                    fontFamily="Inter"
                    color="white"
                    mb={pixelToRem(18)} >
                    Trending Creators
                </Heading>
                <MotionFlex
                    pos="relative"
                    w="100%"
                    align="flex-start"
                    animate={{
                        x: isMobile
                            ? `-${parseFloat(pixelToRem(80).replace('rem', '')) * currentSlide}rem`
                            : `-${parseFloat(pixelToRem(80).replace('rem', '')) * currentSlide}rem`,
                        transition: { ...transition },
                    }}
                >
                    {data.map((card, index) => (
                        <GridItem
                            key={((i) => i)(index)}
                        >
                            <StoriesCard {...{ ...card }} />
                        </GridItem>
                    ))}

                </MotionFlex>
                <ArrowButtons
                    h={pixelToRem(40)}
                    iconSize={4}
                    _hover={{ bg: '#E743A6' }}
                    bg="#E743A6"
                    size={pixelToRem(38)}
                    handleClick={handleClick}
                    current={currentSlide}
                    cols={0}
                    length={data.length}
                />
            </Box>
        </Flex>
    )
}

export default TrendingCreators