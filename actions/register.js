"use server"

export const register = async(data)=>{
    if (!data?.email || !data?.password || !data?.name){
        const form_status = {
            message: 'Missing input fields',
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