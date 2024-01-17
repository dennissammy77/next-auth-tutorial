"use server"

import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

export const login = async(data)=>{
    console.log(data)
    if (!data?.email || !data?.password){
        const form_status = {
            message: 'Invalid Credentials',
            status: 'error',
        }
        return form_status;
    }

    const { email, password} = data;
    let form_status = {}
    try{
        await signIn('credentials',{
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT
        })
    }catch(err){
        console.log(err)
        if (err instanceof AuthError){
            switch (err.type){
                case "CredentialsSignin":
                    form_status = {
                        message: 'Invalid Credentials',
                        status: 'error',
                    }
                    return form_status;
                default:
                    form_status = {
                        message: 'Something went wrong',
                        status: 'error',
                    }
                    return form_status;
            }
        }
        throw err;
    }

    return form_status;
}