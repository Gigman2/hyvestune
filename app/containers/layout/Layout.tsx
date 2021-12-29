import { Box, Flex, Grid, GridItem } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import TopBar from '~/components/Topbar';
import Sidebar from '~/components/Sidebar';
import useWidth from '~/hooks/useElementWidth';
import { pixelToRem } from '~/helpers/misc';
interface ILayoutProps {
  children?: ReactNode;
  showHeader?: boolean;
  page: number;
}
const Layout: React.FC<ILayoutProps> = ({ children, showHeader, page }) => {
  return (
    <Box>
      <Box minH="100vh" fontFamily="body" fontSize={{ lg: 'lg' }}>
        <Grid templateColumns="12.7% 87.3%" h="auto" w="100%" bg="black">
          <GridItem>
            <Sidebar page={page} />
          </GridItem>
          <GridItem>
            <Flex bg="black" direction="column" w="100%">
              {showHeader && (
                <Box position="fixed" bg="transparent" w="87.3%">
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
