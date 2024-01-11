'use client'
import { Box, Button, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import CardWrapper from './CardWrapper'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';

import { MdVisibility,MdVisibilityOff } from "react-icons/md";
import { FormStatus } from './FormStatus';
import { useTransition } from 'react';
import { register } from '@/actions/register';

const RegisterForm=()=>{
  const [name, set_name]=useState('');
  const [email, set_email]=useState('');
  const [password, set_password]=useState('');
  const [input_error, set_input_error]=useState(false);
  const [is_submitting, set_is_submitting] =useState(false);
  const [isPending, startTransition] = useTransition();

  const [show, setShow] = useState(false); //handle state to toggle password
	const handleClick = () => setShow(!show); //handle state to toggle view of password

  const [form_status_message,set_form_status_message]=useState('');
  const [form_status_status,set_form_status_status]=useState('');
  const payload={
    name,
    email,
    password
  }

  const handleSubmit=()=>{
    startTransition(()=>{
      register(payload).then((res)=>{
        console.log(res)
        set_form_status_message(res?.message)
        set_form_status_status(res?.status)
        if(res.status === 'error'){
          set_input_error(true)
        }
      })
    })
  }
  return (
    <CardWrapper
      headerLabel='Create an account'
      backButtonLabel='Already have an account?'
      backButtonHref={'/auth/login'}
      showSocial
    >
      <FormControl mt='1' isRequired isInvalid={input_error && name == '' ? true : false}>
        <FormLabel>Name</FormLabel>
        <Input disabled={isPending} type='text' placeholder='John Doe ' variant='filled' required onChange={((e)=>{set_name(e.target.value)})}/>
        {input_error && name == '' ?  <FormErrorMessage>name is required.</FormErrorMessage> : ( null )}
      </FormControl>
      <FormControl mt='1' isRequired isInvalid={input_error && email == '' ? true : false}>
        <FormLabel>Email</FormLabel>
        <Input disabled={isPending} type='email' placeholder='johndoe@email.com ' variant='filled' required onChange={((e)=>{set_email(e.target.value)})}/>
        {input_error && email == '' ?  <FormErrorMessage>email is required.</FormErrorMessage> : ( null )}
      </FormControl>
      <FormControl mt='1' isRequired isInvalid={input_error && password == '' ? true : false}>
        <FormLabel>Password</FormLabel>
        <InputGroup size='md'>
          <Input disabled={isPending} pr='4.5rem' type={show ? 'text' : 'password'} placeholder='Enter password' variant='filled' required onChange={((e)=>{set_password(e.target.value)})} />
          <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' onClick={handleClick} bg='#fff'> {show ? <MdVisibilityOff/> : <MdVisibility/>} </Button>
          </InputRightElement>
        </InputGroup>
        {input_error && password == '' ?  <FormErrorMessage>password is required.</FormErrorMessage> : ( null )}
      </FormControl>
      <FormStatus message={form_status_message} status={form_status_status}/>
      {isPending?
        <Button isLoading loadingText='Creating your account' variant='ghost' borderRadius={'md'} w='full'/>
        :
        <Button variant={'filled'} borderRadius={'md'} bg='#05232e' mt='2' w='full' color='#fff' onClick={handleSubmit}>Register</Button>
      }
    </CardWrapper>
  )
}

export default RegisterForm