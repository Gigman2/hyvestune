import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import TopBar from '~/components/Topbar';
import Sidebar from '~/components/Sidebar';
interface ILayoutProps {
  children?: ReactNode;
  showHeader?: boolean;
  page: number;
}
const Layout: React.FC<ILayoutProps> = ({ children, showHeader, page }) => {
  return (
    <Box>
      <Box minH="100vh" fontFamily="body" fontSize={{ lg: 'lg' }}>
        <Grid templateColumns={{ base: "15% 85%", }} h="auto" w="100%" bg="black">
          <GridItem>
            <Sidebar page={page} />
          </GridItem>
          <GridItem>
            <Flex h="100vh" overflowY="scroll" bg="black" direction="column" w="100%">
              {showHeader && (
                <Box position="fixed" zIndex={50} bg="black" w="100%">
                  {<TopBar width="100%" />}
                </Box>
              )}
              {children}
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default Layout;
