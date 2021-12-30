import { Box, Flex, Icon, Image, Text, Link } from '@chakra-ui/react';
import React from 'react';

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

const Navs = [
  {
    name: 'Menu',
    children: [
      { id: 1, name: 'Home', icon: Home, path: '/dashboard' },
      { id: 2, name: 'Explore', icon: Search },
      { id: 3, name: 'Wallet', icon: Card },
    ],
  },
  {
    name: 'Library',
    children: [
      { id: 4, name: 'Playlist', icon: Music },
      { id: 5, name: 'Album', icon: Folder },
    ],
  },
  {
    name: 'NFTs',
    children: [
      { id: 6, name: 'Market Place', icon: NFT },
      { id: 7, name: 'My Portfolio', icon: Activity },
      { id: 8, name: 'Active Bids', icon: Briefcase },
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
    <Flex as="aside" position="fixed" minH="100vh" h="auto" bg="black" direction={'column'}>
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
              <Flex
                as={Link}
                to={child.path}
                align={'center'}
                px={6}
                py={1}
                _hover={{ textDecoration: 'none' }}
                bg={page === child.id ? 'rgba(255, 255, 255, 0.12)' : 'transparent'}
                rounded={'md'}
                mb={4}
                color={page === child.id ? 'white' : 'whiteAlpha.500'}
                cursor={'pointer'}
                _activeLink={{ color: 'white', bg: 'whiteAlpha.200', textDecoration: 'none' }}
                _active={{ color: 'white', bg: 'whiteAlpha.200', textDecoration: 'none' }}
              >
                <Icon as={child.icon} />
                <Text ml={2}>{child.name}</Text>
              </Flex>
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
    </Flex>
    // <Outlet />
  );
};

export default Sidebar;
