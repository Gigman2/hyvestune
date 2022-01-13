import React from 'react'
import MusicBody from '~/components/MusicContent/MusicBody';
import MusicHeader from '~/components/MusicContent/MusicHeader';
import Layout from '~/containers/layout/Layout';
import { pixelToRem } from '~/helpers/misc';


interface Props { }

const Content: React.FC = () => {
    return <Layout
        page={5}
        showHeader
        headerBg="transparent"
    >
        <MusicHeader />
        <MusicBody />
    </Layout>
}

export default Content