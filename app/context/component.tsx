import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { IComponentContext } from '~/interfaces/context,interface'
import { useDisclosure } from '@chakra-ui/react'

const ComponentContext = createContext({})

export const ComponentContextProvider: React.FC = ({ children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [modal, setModal] = React.useState<string>('')
    const [data, setData] = React.useState<unknown>('')



    const handleModalClick = (item: React.SetStateAction<string>, data?: unknown) => {
        setModal(item)
        setData(data)
        onOpen()
    }

    return (
        <ComponentContext.Provider
            value={{
                isOpen,
                onClose,
                modal,
                data,
                handleModalClick
            }}
        >
            {children}
        </ComponentContext.Provider>
    )
}

ComponentContextProvider.propTypes = {
    children: PropTypes.node.isRequired
}

const useComponent = (): IComponentContext => useContext(ComponentContext) as IComponentContext

export default useComponent
