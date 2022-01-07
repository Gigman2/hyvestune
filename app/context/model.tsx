import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { IModalContext } from '~/interfaces/context,interface'
import useComponent from './component'
import NewPlaylist from '~/components/Modals/NewPlaylist'

const ModalContext = createContext({})

export const ModalContextProvider: React.FC = ({ children }) => {

    const { modal } = useComponent()

    function getModals(value: string) {
        switch (value) {
            case 'new-playlist':
                return <NewPlaylist />
            default:
                return null
        }
    }


    return (
        <ModalContext.Provider
            value={{
            }}
        >
            {getModals(modal)}
            {children}
        </ModalContext.Provider>
    )
}

ModalContextProvider.propTypes = {
    children: PropTypes.node.isRequired
}

const useApp = (): IModalContext => useContext(ModalContext) as IModalContext

export default useApp
