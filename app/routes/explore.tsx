import React from 'react';
import NewReleases from '~/components/Explore/New Releases/NewReleases';
import Layout from '~/containers/layout/Layout';

const Explore = () => {
  return (
    <Layout page={2} showHeader>
      <NewReleases />
    </Layout>
  );
};

export default Explore;
