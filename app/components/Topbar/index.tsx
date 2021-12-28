import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "remix/client";

export default function Topbar() {
  return (
    <Flex  h="50px" w="100%" bg="black" align={'center'}>
      <Box h={12} w={'500px'} bg="whiteAlpha.400" rounded={'full'}></Box>
    </Flex>
    // <Outlet />
  );
}
