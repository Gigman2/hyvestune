import React from 'react'
import { Button as ChakraButton } from '@chakra-ui/react'

interface IButtonProps {
    title?: string
    children?: React.ReactNode
    bg?: any
    boxShadow?: any,
    color?: any,
    [x: string]: any
}

const Button: React.FC<IButtonProps> = ({ title, children, bg, boxShadow, color, ...rest }) => {
    return <ChakraButton
        bg={bg || "white"}
        color={color || 'black'}
        boxShadow={boxShadow || "10px 10px 20px rgba(18, 4, 107, 0.12)"}
        {...rest}
    >
        {title}{children}
    </ChakraButton>
}

export default Button