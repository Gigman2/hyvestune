<<<<<<< HEAD
import { Box, Flex, Icon, Image, Text, Link } from "@chakra-ui/react";
import { Home, Search, Card, Folder, Music, NFT, Activity, Briefcase, Setting, Help, Logout } from "~/theme/Icons";

const Navs = [
    {
        name: 'Menu',
        children: [
            {name: 'Home', icon: Home, path: 'dashboard'},
            {name: 'Explore', icon: Search},
            {name: 'Wallet', icon: Card},
        ]
    },
    {
        name: 'Library',
        children: [
            {name: 'Playlist', icon: Music},
            {name: 'Album', icon: Folder}
        ]
    },
    {
        name: 'NFTs',
        children: [
            {name: 'Market Place', icon: NFT},
            {name: 'My Portfolio', icon: Activity},
            {name: 'Active Bids', icon: Briefcase}
        ]
    }
]
=======
import { Box, Flex, Icon, Image, Text, Link } from '@chakra-ui/react';
import {Link as RemixRouter} from 'remix'
import React from 'react';
import { pixelToRem } from '~/helpers/misc';

import {
  Home,
  Search,
  Card,
  Folder,
  Music,
  NFT,
  Activity,
  Briefcase,
  Setting,
  Help,
  Logout,
} from '~/theme/Icons';
>>>>>>> 8bf8ae9d8ae75e89ef679dc3ad739596b83c9c3f

const Navs = [
  {
    name: 'Menu',
    children: [
      { id: 1, name: 'Home', icon: Home, path: '/dashboard' },
      { id: 2, name: 'Explore', icon: Search, path: '/explore' },
      { id: 3, name: 'Wallet', icon: Card, path: '/wallet' },
    ],
  },
  {
    name: 'Library',
    children: [
      { id: 4, name: 'Playlist', icon: Music, path: '/playlist' },
      { id: 5, name: 'Album', icon: Folder, path: '/album' },
    ],
  },
  {
    name: 'NFTs',
    children: [
      { id: 6, name: 'Market Place', icon: NFT , path: '/marketplace' },
      { id: 7, name: 'My Portfolio', icon: Activity, path: '/portfolio' },
      { id: 8, name: 'Active Bids', icon: Briefcase, path: 'bids' },
    ],
  },
];

const NavsFooter = [
  { name: 'Settings', icon: Setting, path: '/dashboard/' },
  { name: 'Help Center', icon: Help, path: '/dashboard/' },
  { name: 'Log out', icon: Logout, path: '/dashboard/' },
];
interface ISidebarProps {
  page: number;
}
const Sidebar: React.FC<ISidebarProps> = ({ page }) => {
  return (
<<<<<<< HEAD
    <Flex  minH="100vh" h="auto" w="250px" bg="black" direction={'column'}>
        <Box>
            <Image src={'/images/logo.png'} />
        </Box>
        <Box mt={6} ml={8}>
            {Navs.map(item => (
                <Box mb={8}>
                    <Text color="white" fontWeight={400} mb={4}>{item.name}</Text>
                    {item.children.map(child => (
                        <Flex
                            as={Link}
                            to={'/login'} 
                            align={'center'} 
                            px={6} 
                            py={1} 
                            bg="transparent" 
                            rounded={"md"} 
                            mb={4} 
                            color="whiteAlpha.500" 
                            cursor={'pointer'}
                            textDecoration={'none'}
                            _activeLink={{color: 'white', bg: 'whiteAlpha.200'}}>
                            <Icon as={child.icon}/>
                            <Text ml={2}>{child.name}</Text>
                        </Flex>
                    ))}
                </Box>)
            )}
        </Box>

        <Box mt={6} ml={8}>
            {NavsFooter.map(item => (
                <Flex align={'center'} mb={3} color="white" cursor="pointer">
                    <Icon as={item.icon}/>
                    <Text color="white" fontWeight={400} ml={2}>{item.name}</Text>
                </Flex>)
            )}
        </Box>
=======
    <Flex as="aside" w="15%" position="fixed" minH="100vh" h="auto" bg="black" direction={'column'} pr={pixelToRem(54)} >
      <Box>
        <Image src={'/images/logo.png'} />
      </Box>
      <Box mt={6} ml={6}>
        {Navs.map((item) => (
          <Box mb={8}>
            <Text color="white" fontWeight={400} mb={4}>
              {item.name}
            </Text>
            {item.children.map((child) => (
              <Link
                display="flex"
                as={RemixRouter}
                to={child?.path}
                alignItems='center'
                flexDirection="row"
                px={6}
                py={1}
                _hover={{ textDecoration: 'none' }}
                bg={page === child.id ? 'rgba(255, 255, 255, 0.12)' : 'transparent'}
                rounded={'md'}
                mb={4}
                color={page === child.id ? 'white' : 'whiteAlpha.500'}
                cursor={'pointer'}
                _focus={{ outline: 'none' }}
                _activeLink={{ color: 'white', bg: 'whiteAlpha.200', outline : "none",  textDecoration: 'none' }}
                _active={{ color: 'white', bg: 'whiteAlpha.200', outline : 'none', textDecoration: 'none' }}
              >
                <Icon as={child.icon} />
                <Text ml={2}>{child.name}</Text>
              </Link>
            ))}
          </Box>
        ))}
      </Box>

      <Box mt={6} ml={8}>
        {NavsFooter.map((item) => (
          <Flex align={'center'} mb={3} color="white">
            <Icon as={item.icon} />
            <Text color="white" fontWeight={400} ml={2}>
              {item.name}
            </Text>
          </Flex>
        ))}
      </Box>
>>>>>>> 8bf8ae9d8ae75e89ef679dc3ad739596b83c9c3f
    </Flex>
    // <Outlet />
  );
};

export default Sidebar;
