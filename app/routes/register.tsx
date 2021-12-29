import { Outlet } from 'react-router-dom';
import { Box, Heading, Button, Text, Icon, Link, Image } from '@chakra-ui/react';
import { AiOutlineGoogle } from 'react-icons/ai';
import { GrFacebookOption } from 'react-icons/gr';
import { Input } from '~/components/Forms';

export default function Login() {
  return (
    <Box
      w={'full'}
      h={'100vh'}
      pt="7vh"
      bg={"url('/images/create account-image.png')"}
      backgroundSize="cover"
      pos="relative"
    >
      <Box
        bg="htGradient.500"
        w="100%"
        h="100%"
        pos={'absolute'}
        top="0"
        opacity={0.5}
        zIndex={2}
      ></Box>
      <Box
        w={'700px'}
        minH="80vh"
        bg="white"
        mx="auto"
        rounded="2xl"
        p={5}
        pos={'relative'}
        zIndex={3}
      >
        <Heading textAlign={'center'} fontSize={18} mt={8}>
          Create Account
        </Heading>

        <Box mt={6} w={'500px'} mx={'auto'}>
          <Input
            type="email"
            borderWidth={2}
            borderColor={'htIndigo.500'}
            rounded={10}
            w="full"
            as={Input}
            required
            id="email"
            label="Email"
            onBlur={() => null}
            placeholder=""
            value={''}
            error={''}
            touched={false}
            onChange={() => null}
            setFieldTouched={() => null}
          />

          <Input
            mTop={10}
            type="password"
            borderWidth={2}
            borderColor={'htIndigo.500'}
            rounded={10}
            w="full"
            as={Input}
            required
            id="password"
            label="Password"
            onBlur={() => null}
            placeholder=""
            value={''}
            error={''}
            touched={false}
            onChange={() => null}
            setFieldTouched={() => null}
          />
          <Button
            bg={'htIndigo.500'}
            rounded={10}
            w="full"
            h={14}
            mt={10}
            color="white"
            fontWeight={500}
          >
            Create Account
          </Button>

          <Text textAlign={'center'} mt={4}>
            or
          </Text>
          <Button
            bg={'rgba(222, 82, 70, 1)'}
            _hover={{
              bg: '#bf3e32',
            }}
            rounded={10}
            w="full"
            h={14}
            mt={4}
            color="white"
            fontWeight={500}
          >
            <Icon as={AiOutlineGoogle} mr={2} boxSize={6} /> Continue with google
          </Button>
          <Button
            bg={'rgba(66, 103, 178, 1)'}
            _hover={{
              bg: '#2f5299',
            }}
            rounded={10}
            w="full"
            h={14}
            mt={6}
            color="white"
            fontWeight={500}
          >
            <Icon as={GrFacebookOption} mr={1} boxSize={6} />
            Continue with facebook
          </Button>
          <Outlet />
          <Text textAlign={'center'} mt={4} mb={8}>
            Already have an account ? <Link color="blue.400">login here</Link>
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
