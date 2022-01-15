import { Box, Grid, GridItem, Flex, Heading } from '@chakra-ui/react';
import React from 'react'
import Recommended from '~/components/Recommended';
import Layout from '~/containers/layout/Layout';
import { pixelToRem } from '~/helpers/misc';
import { Folder } from '~/theme/Icons';
import DoubleWBanner from '~/components/Cards/DoubleWBanner';
import SoundWave from '~/assets/images/sound-wave.png'
import AuctionCard from '~/components/Cards/AuctionCard';
import Disco from '~/assets/images/disco.png'

const ActiveBids: React.FC = () => {
    return  <Box
    pl={pixelToRem(42)}
    mt={{ xl: pixelToRem(164) }}
    w="100%"
  >
    <Box pr={pixelToRem(40)}>
      <Grid
        templateColumns="62% 32%"
        w="100%"
        gap={pixelToRem(37)}
      >
        <GridItem>
          <DoubleWBanner height={300} color="htGradient.3" image={SoundWave} 
            context={{
              heading: 'Trending No 1', 
              main: 'SoundWave', 
              subtext: 'Bidding: $4,440', 
              otherText: '7hours: 50mins: 26secs'
              }} 
            />
        </GridItem>
        <GridItem>
          <AuctionCard 
            image={Disco} 
            title='Mixed Feelings' 
            cost={1994.0} 
            artist='Godichi'/>
        </GridItem>
      </Grid>
    </Box>
    <Box mt={{ xl: pixelToRem(31) }} mb={3} pr={pixelToRem(76)}>
      <Flex direction="column">
        <Heading
          color="white"
          fontFamily={"Lato"}
          fontWeight={ 600}
          lineHeight={{ xl: pixelToRem(21.78) }}
          fontSize={{ xl: pixelToRem(16) }}
        >
          {'Trending Bids'}
        </Heading>
        <Box mt={{ xl: pixelToRem(17) }} maxW={{ base: '100%' }} pos="relative">
          <Grid
            gap={{ base: pixelToRem(80), '5xl': pixelToRem(80) }}
            w="100%"
            templateColumns={'repeat(3,1fr)'}
          >
              <GridItem>
                <AuctionCard 
                  image={Disco} 
                  title='Mixed Feelings' 
                  cost={1994.0} 
                  artist='Godichi'/>
              </GridItem>
              <GridItem>
                <AuctionCard 
                  image={Disco} 
                  title='Mixed Feelings' 
                  cost={1994.0} 
                  artist='Godichi'/>
              </GridItem>
              <GridItem>
                <AuctionCard 
                  image={Disco} 
                  title='Mixed Feelings' 
                  cost={1994.0} 
                  artist='Godichi'/>
              </GridItem>
          </Grid>
        </Box>
      </Flex>
    </Box>
  </Box>
}

export default ActiveBids