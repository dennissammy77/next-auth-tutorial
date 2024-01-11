"use server"
import bcrypt from 'bcryptjs';
import { db } from '@/src/lib/db';
import { getUserByEmail } from '@/data/user';

export const register = async(data)=>{
    console.log(data)
    if (!data?.email || !data?.password || !data?.name){
        const form_status = {
            message: 'Missing input fields',
            status: 'error',
        }
        return form_status;
    }
    const {email, password, name} = data;

    const hashedpassword = await bcrypt.hash(password, 10);
    const existing_user = await getUserByEmail(email)

    if (existing_user) {
        const form_status = {
            message: 'Email already in use',
            status: 'error',
        }
        return form_status
    }
    await db.user.create({
        data:{
            name,
            email,
            password: hashedpassword
        }
    })

    const form_status = {
        message: 'Account created successfully!',
        status: 'success',
    }

    // Verification token email
    return form_status;
}