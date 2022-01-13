import React from 'react'
import MusicBody from '~/components/MusicContent/MusicBody';
import MusicHeader from '~/components/MusicContent/MusicHeader';
import Layout from '~/containers/layout/Layout';
import { pixelToRem } from '~/helpers/misc';
import OuterTems from '~/assets/images/outer-tems.png'

import Tems from '~/assets/images/tems.png'



interface Props { }

const Content: React.FC = () => {
    const data = [
        {
            title: 'Found',
            artist: 'Tems ft Byrant'
        },
        {
            title: 'Replay',
            artist: 'Tems'
        },
        {
            title: 'Avoid Things',
            artist: 'Tems'
        },
        {
            title: 'Crazy Things',
            artist: 'Tems'
        },
        {
            title: 'Vibe Out',
            artist: 'Tems'
        }

    ]
    return <Layout
        page={5}
        showHeader
        headerBg="transparent"
    >
        <MusicHeader outerImage={OuterTems} profileImage={Tems} showAdditionalInfo pageTitle="EP" pageAdditionalTitles="If Orange Was A Place" />
        <MusicBody data={data} />
    </Layout>
}

export default Content