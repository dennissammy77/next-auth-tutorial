import Loginbutton from "@/src/components/auth/login-button.js";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box bgGradient="radial(purple.300, purple.200)" h='100vh' w='100%' p='' alignItems='center' justify='center'>
      <Flex  flexDirection={'column'} border='1px solid red' h='full' py={'25vh'} align={'center'} gap='4'>
        <Box align='center' gap='2'>
          <Heading as={'h1'}>Auth</Heading>
          <Text my='2'>
            A simple authentication service
          </Text>
        </Box>
        <Box >
          <Loginbutton>
            Sign In
          </Loginbutton>
        </Box>
      </Flex>
    </Box>
  )
}