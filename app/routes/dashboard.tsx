import { Box,Flex } from "@chakra-ui/react";
import { Outlet } from "remix/client";
import Topbar from "~/components/Topbar";
import Sidebar from "~/components/Sidebar";

export default function Dashboard() {
  return (
    <Box bg="#121111" h="auto">
      <Flex minH={'100vh'}  h="auto" w="100%">
        <Sidebar />
        <Box w="100%" pos="relative" maxH={'100%'}>
          <Topbar />
          <Outlet />
        </Box>
      </Flex>
    </Box>
    // <Outlet />
  );
}
