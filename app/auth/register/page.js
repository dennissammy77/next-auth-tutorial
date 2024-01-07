import { React } from 'react';
import { Box, Text } from '@chakra-ui/react';
import RegisterForm from '@/src/components/auth/Register-Form';

export default function Page(){
	return(
		<Box w='md' m='auto' align={'center'}>
			<RegisterForm/>
		</Box>
	)
}
