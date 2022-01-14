import { Box } from '@chakra-ui/react'
import React from 'react'
import Layout from '~/containers/layout/Layout'
import MusicBody from '~/components/MusicContent/MusicBody';
import MusicHeader from '~/components/MusicContent/MusicHeader';

interface Props { }

const PlayListItem: React.FC = () => {
    return <Layout
        page={5}
        showHeader
        headerBg="transparent"
    >
        <MusicHeader profiledColor="#E743A6"
            outeredColor={"linear-gradient(#E743A6, transparent)"}
            pageTitle="Playlist" pageAdditionalTitles="First Playlist"
        />
        <MusicBody asRecommended />
    </Layout>
}

export default PlayListItem