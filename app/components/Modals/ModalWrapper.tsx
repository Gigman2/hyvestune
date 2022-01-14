import { Box, Divider, Flex, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React from 'react'

interface IModalWrapperProps {
    showHeader?: boolean,
    isOpen: boolean,
    onClose: () => void,
    title?: string,
    size: string,
    isCentered: boolean | undefined,
    CustomHeader?: any,
    bodyRounded?: any,
    closeButtonColor?: any,
    image?: any,
    alt?: any,
    scrollBehavior?: any,
    px?: any,
    bg?: any,
    isDivider?: any,
    children: React.ReactNode,
    contentRounded?: any,
    headerContainerProps?: any,
    buttonProps?: any,
    py?: any
}

const ModalWrapper: React.FC<IModalWrapperProps> = ({
    showHeader = false,
    isOpen,
    onClose,
    title,
    size,
    isCentered,
    CustomHeader,
    bodyRounded,
    closeButtonColor,
    image,
    alt,
    scrollBehavior,
    px = { base: 4, md: 10 },
    bg,
    isDivider,
    children,
    contentRounded,
    headerContainerProps = {},
    buttonProps = {},
    py
}) => {
    return <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={size}
        isCentered={isCentered}
        scrollBehavior={scrollBehavior}
        closeOnOverlayClick={false}
    >
        <ModalOverlay />
        <ModalContent
            bg={bg || "#333333"}
            rounded={contentRounded || '2xl'}>
            <ModalHeader {...headerContainerProps}>
                {showHeader && (
                    <Flex w='100%' direction='column' justify='center' align='center'>
                        <Box>
                            {title}
                            {image && <Image width={12} src={image} alt={alt} />}
                        </Box>
                        {isDivider && <Divider w='100%' color='white' />}
                    </Flex>
                )}
                {CustomHeader}
            </ModalHeader>
            <ModalCloseButton
                _focus={{ outline: 'none' }}
                _hover={{ outline: 'none' }}
                color={closeButtonColor || 'white'}
                {...buttonProps}
            />
            <ModalBody px={px} py={py || 5} bg={bg || "#333333"} rounded={bodyRounded || '2xl'}>
                {children}
            </ModalBody>
        </ModalContent>
    </Modal>
}

export default ModalWrapper