"use server"

export const login = async(data)=>{
    if (!data?.email || !data?.password){
        const form_status = {
            message: 'Invalid Credentials',
            status: 'error',
        }
        return form_status;
    }
    const form_status = {
        message: 'Email sent',
        status: 'success',
    }
    return form_status;
}