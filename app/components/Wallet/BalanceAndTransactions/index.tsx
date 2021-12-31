

import React from 'react'
import PropTypes from 'prop-types'
import { Box, Flex, GridItem, Heading, Select } from '@chakra-ui/react'
import BalanceCard from '~/components/Cards/BalanceCard'
import { pixelToRem } from '~/helpers/misc'
import TransactionHistory from '~/components/Cards/TransactionHistoryCard'

const BalanceAndTransactions = () => {
    return (
        <GridItem>
            <BalanceCard />
            <TransactionHistory />
        </GridItem>
    )
}



export default BalanceAndTransactions
