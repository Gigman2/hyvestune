import { Box,Flex } from "@chakra-ui/react";
import { Outlet } from "remix/client";
import Topbar from "~/components/Topbar";
import Sidebar from "~/components/Sidebar";

export default function Dashboard() {
  return (
    <Flex minH={'100vh'}  h="auto" w="100%" bg="black">
      <Sidebar />
      <Box w="100%" pos="relative">
        <Topbar />
        <Outlet />
      </Box>
    </Flex>
    // <Outlet />
  );
}
