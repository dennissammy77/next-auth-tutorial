'use Client'
import { Fade, ScaleFade, Slide, SlideFade, Collapse, Box, useDisclosure, Text } from '@chakra-ui/react'

function Loginbutton({children, props, asChild}) {
    const { isOpen, onToggle } = useDisclosure();
  return (
    <Box>
        {children}
        <SlideFade in={isOpen} offsetY='20px'>
            <Box
            p='40px'
            color='white'
            mt='4'
            bg='teal.500'
            rounded='md'
            shadow='md'
            >
            <Text>sa</Text>
            </Box>
        </SlideFade>
    </Box>
  )
}

export default Loginbutton;