import { Flex, Heading, Image, Icon } from '@chakra-ui/react';
import React from 'react'
import { Outlet } from 'remix';
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
           <Outlet />
        </Layout>
    );
}

export default Album