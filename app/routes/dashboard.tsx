import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { Outlet } from 'remix/client';
import Topbar from '~/components/Topbar';
import Sidebar from '~/components/Sidebar';

const Dashboard = () => {
  return (
    <Flex minH="100vh" h="auto" w="100%" bg="black">
      <Sidebar />
      <Box p={10} w="100%">
        <Topbar />
      </Box>
    </Flex>
  );
};

export default Dashboard;
