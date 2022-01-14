import { Box } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'remix';


const Dashboard = () => {
  return <>
      <Outlet />
    </>
};

export default Dashboard;
