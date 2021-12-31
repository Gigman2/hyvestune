import { Box, Flex, Grid, GridItem, Heading, Icon, Select, Text } from '@chakra-ui/react'
import React from 'react'
import { BiTrendingDown } from 'react-icons/bi'
import { pixelToRem } from '~/helpers/misc'
import CreditDebitCard from '../CreditDebitCard'

const TransactionHistory: React.FC = () => {
    const data = [{
        type: 'Debit',
        title: 'Blinding light',
        value: -0.99
    },
    {
        type: 'Credit',
        title: 'Royalties',
        value: 0.99
    },
    {
        type: 'Credit',
        title: 'Royalties',
        value: 0.99
    },
    {
        type: 'Debit',
        title: 'Blinding light',
        value: -0.99
    }
    ]



    return (
        <Box
            w="100%"
            mt={pixelToRem(78)}
        >
            <Flex
                direction="row"
                justify="space-between"
                align="center"
            >
                <Heading
                    fontWeight={700}
                    color="white"
                    lineHeight={pixelToRem(29.05)}
                    fontSize={pixelToRem(24)}
                    letterSpacing={pixelToRem(2)}
                >
                    Transaction History
                </Heading>
                <Box>
                    <Select defaultValue={"24, Oct 2021"} color="white" placeholder='Select option'>
                        <option value='24, Oct 2021'>24, Oct 2021</option>
                    </Select>
                </Box>
            </Flex>

            <Flex
                direction="column"
            >
                <Text
                    mt={pixelToRem(4)}
                    lineHeight={pixelToRem(21.6)}
                    fontSize={pixelToRem(18)}
                    fontWeight={400}
                    color="brandGrey.100"
                >Today</Text>
                <Flex pt={pixelToRem(5)} direction="column" >
                    {data.map((item, index) => <CreditDebitCard {...item} key={(i => i)(index)} />)}
                </Flex>
            </Flex>

        </Box>
    )
}




export default TransactionHistory
