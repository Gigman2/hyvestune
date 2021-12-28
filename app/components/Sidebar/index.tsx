import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { Home, Search, Card, Folder, Music, NFT, Activity, Briefcase } from "~/theme/Icons";

const Navs = [
    {
        name: 'Menu',
        children: [
            {name: 'Home', icon: Home, path: '/dashboard/'},
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

export default function Sidebar() {
  return (
    <Flex  h="100vh" w="250px" bg="black" direction={'column'}>
        <Box>
            <Image src={'/images/logo.png'} />
        </Box>
        <Box mt={6} ml={8}>
            {Navs.map(item => (
                <Box mb={8}>
                    <Text color="white" fontWeight={400} mb={4}>{item.name}</Text>
                    {item.children.map(child => (
                        <Flex 
                            align={'center'} 
                            px={6} 
                            py={1} 
                            bg="whiteAlpha.200" 
                            rounded={"md"} 
                            mb={4} 
                            color="whiteAlpha.500" 
                            cursor={'pointer'} 
                            _active={{color: 'white'}}>
                            <Icon as={child.icon}/>
                            <Text ml={2}>{child.name}</Text>
                        </Flex>
                    ))}
                </Box>)
            )}
        </Box>
    </Flex>
    // <Outlet />
  );
}
