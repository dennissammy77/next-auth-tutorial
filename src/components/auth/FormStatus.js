import { Alert, AlertDescription, AlertIcon, AlertTitle, Icon } from "@chakra-ui/react"

export const FormStatus=(props)=>{
    const {message, status, icon} = {...props};
    if (!message) return null;

    return(
        <Alert status={status} size='sm' mt='2 '>
            <Icon as={icon} mr='2'/>
            <AlertDescription fontSize={'sm'}>{message}</AlertDescription>
        </Alert>
    )
} 