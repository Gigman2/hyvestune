import { Flex, Heading, Image, Icon } from '@chakra-ui/react';
import React from 'react'
import Recommended from '~/components/Recommended';
import Layout from '~/containers/layout/Layout';
import { pixelToRem } from '~/helpers/misc';
import { Folder } from '~/theme/Icons';



const Album: React.FC = () => {
    return (
        <Layout
            page={5}
            showHeader
        >
            <Flex
                h="100%"
                w="100%" align="center" justify="center" direction="column" >
                <Flex mt={pixelToRem(200)} w="50%"
                    align="center"
                    justify="center"
                    direction="column" >
                    <Icon
                        color="white"
                        w={pixelToRem(58.33)}
                        h={pixelToRem(52.5)}
                        as={Folder} />
                    <Heading
                        mt={pixelToRem(69.65)}
                        fontSize={pixelToRem(24)}
                        lineHeight={pixelToRem(29.05)}
                        fontWeight={600}
                        color="white"
                    >
                        No album has been added
                    </Heading>

                </Flex>
                <Recommended />
            </Flex>
        </Layout>
    );
}

export default Album