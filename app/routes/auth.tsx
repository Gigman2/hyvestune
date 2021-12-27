import { Outlet } from "react-router-dom";
import {
  Box, Heading, Button, Text, Icon, Link, Image
} from '@chakra-ui/react'
import {AiOutlineGoogle} from 'react-icons/ai'
import {GrFacebookOption} from 'react-icons/gr'
import { Input } from "~/components/Forms"

export default function Login() {
  return (
    <Box w={'full'} h={'100vh'} pt="7vh" bg={"url('/images/create account-image.png')"} backgroundSize="cover" pos="relative">
      <Box bg="htGradient.500" w="100%" h="100%" pos={'absolute'} top="0" opacity={0.5} zIndex={2}></Box>
      <Outlet />
    </Box>
  );
}
