import { Box, Grid, Heading } from '@chakra-ui/react'
import React from 'react'
import AuctionCard from '~/components/Cards/AuctionCard'
import { pixelToRem } from '~/helpers/misc'
import Ruger from '~/assets/images/ruger.png'
import Feelings from '~/assets/images/feelings.png'
import NewSlide from '~/assets/images/newSlide.png'

interface Props { }

const RecommendedAuctions: React.FC = () => {

    const data = [{
        image: Ruger,
        cost: 1994.0,
        title: 'The Second Wave',
        artist: 'Ruger'
    },
    {
        image: Feelings,
        cost: 1994.0,
        title: 'Mixed Feelings',
        artist: 'Godichi'
    },
    {
        image: NewSlide,
        cost: 1994.0,
        title: 'New Slide',
        artist: 'Ruger'
    },
    {
        image: Ruger,
        cost: 1994.0,
        title: 'Mixed Feelings',
        artist: 'Godichi'
    },
    {
        image: NewSlide,
        cost: 1994.0,
        title: 'New Slide',
        artist: 'Ruger'
    },
    {
        image: Ruger,
        cost: 1994.0,
        title: 'Mixed Feelings',
        artist: 'Godichi'
    }
    ]
    return <Box w="100%" >

        <Heading
            pt={pixelToRem(5)}
            fontSize={pixelToRem(18)}
            fontWeight={600}
            lineHeight={pixelToRem(21.78)}
            fontStyle="normal"
            fontFamily="Inter"
            color="white"
            mb={pixelToRem(18)}
        >
            Recommended Auctions
        </Heading>

        <Grid
            templateColumns="repeat(2, 1fr)"
            gap={pixelToRem(41)}
        >
            {
                data?.map((card, index) => <AuctionCard key={(i => i)(index)} {...{ ...card }} />)
            }

        </Grid>

    </Box>
}

export default RecommendedAuctions