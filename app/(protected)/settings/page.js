import { auth, signOut } from "@/auth";
import { Box, Button, Text } from "@chakra-ui/react";

const SettingsPage=async()=>{
    const session = await auth();

    const HandleSignOut=async()=>{
        "use server";

        await signOut();
    }
    return(
        <Box>
            <Text> {JSON.stringify(session)} </Text>
            <form action={async ()=>{
                "use server";

                await signOut();
            }}>
                <Button type='submit'>Sign Out</Button>
            </form>
        </Box>
    )
}

export default SettingsPage;