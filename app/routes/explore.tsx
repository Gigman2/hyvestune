import React from 'react';
import Genres from '~/components/Explore/Genres';
import NewReleases from '~/components/Explore/New Releases/NewReleases';
import Top100Hits from '~/components/Explore/Top100Hits';
import Layout from '~/containers/layout/Layout';

const Explore = () => {
  return (
    <Layout page={2} showHeader>
      <NewReleases />
      <Top100Hits />
      <Genres />
    </Layout>
  );
};

export default Explore;
