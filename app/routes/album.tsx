import React from 'react'
import Layout from '~/containers/layout/Layout';



const Album: React.FC = () => {
    return (
        <Layout
            page={5}
            showHeader
        ></Layout>
    );
}

export default Album