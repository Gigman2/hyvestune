import { Box,Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { Outlet } from "remix/client";
import Topbar from "~/components/Topbar";
import Sidebar from "~/components/Sidebar";

export default function Dashboard() {
  return (
    <Flex minH={'100vh'}  h="auto" w="100%" bg="black">
      <Sidebar />
      <Box p={10} w="100%">
        <Topbar />
        <Grid templateColumns={'repeat(12,1fr)'} mt={12} gap={12}>
          <Box as={GridItem} colSpan={8}>
            <Flex px={8} py={4} bg="htPink.600" rounded={'2xl'} h={60} w={'full'} align="center">
              <Box>
                <Text fontSize={12} color="white">Song of the week</Text>
                <Text color="white" fontSize={24} fontWeight={'light'}>Happier Than Ever</Text>
                <Text fontSize={14} color="white" mt={3}>By: Billie Elish</Text>
              </Box>
            </Flex>
          </Box>
          <Box as={GridItem} colSpan={4}>
            <Flex px={8} py={4} bg="htIndigo.500" rounded={'2xl'} h={60} w={'full'} align="center">
              <Box>
                <Text fontSize={12} color="white">Continue</Text>
                <Text color="white" fontSize={24} fontWeight={'light'}>Thriumphant</Text>
                <Text fontSize={14} color="white" mt={3}>Olamide ft bella shurmuda</Text>
              </Box>
            </Flex>
          </Box>
        </Grid>
      </Box>
    </Flex>
    // <Outlet />
  );
}
