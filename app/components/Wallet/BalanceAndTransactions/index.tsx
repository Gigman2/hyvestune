

import React from 'react'
import PropTypes from 'prop-types'
import { Box, GridItem } from '@chakra-ui/react'
import BalanceCard from '~/components/Cards/BalanceCard'
import { pixelToRem } from '~/helpers/misc'

const BalanceAndTransactions = () => {
    return (
        <GridItem>
            <BalanceCard />
            <Box
                w="100%"
                mt={pixelToRem(78)}
            >

            </Box>
        </GridItem>
    )
}



export default BalanceAndTransactions
