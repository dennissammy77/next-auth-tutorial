import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import CardWrapper from './CardWrapper'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'

const LoginForm=()=>{
  return (
    <CardWrapper
      headerLabel='Welcome back'
      backButtonLabel='Dont have an account?'
      backButtonHref={'/auth/register'}
      showSocial
    >
      <Text>Login Form</Text>
    </CardWrapper>
  )
}

export default LoginForm