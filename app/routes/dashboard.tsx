import { Box,Flex } from "@chakra-ui/react";
import { Outlet } from "remix/client";
import Topbar from "~/components/Topbar";
import Sidebar from "~/components/Sidebar";

export default function Dashboard() {
  return (
    <Flex minH={'100vh'}  h="100vh" w="100%" bg="black">
      <Sidebar />
      <Box p={10}>
        <Topbar />
      </Box>
    </Flex>
    // <Outlet />
  );
}
