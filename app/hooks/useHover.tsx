import { useState, useRef, useEffect } from 'react'


export const useHover = () => {
    const [value, setValue] = useState<boolean>(false)
    const ref = useRef<any>(null)
    const handleMouseOver = (): void => setValue(true)
    const handleMouseOut = (): void => setValue(false)
    useEffect(() => {
        const node = ref.current
        if (node) {
            node.addEventListener('mouseover', handleMouseOver)
            node.addEventListener('mouseout', handleMouseOut)
            return () => {
                node.removeEventListener('mouseover', handleMouseOver)
                node.removeEventListener('mouseout', handleMouseOut)
            }
        }
    }, [])
    return { ref, value }
}
