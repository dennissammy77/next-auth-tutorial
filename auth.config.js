import Credentials from 'next-auth/providers/credentials';
import { getUserByEmail } from './data/user';
import bcrypt from 'bcryptjs'

export const AuthConfig = {
  providers: [
    Credentials({
      async authorize(credentials){
        const {email, password} = credentials;

        const user = await getUserByEmail(email);
        if(!user || !user.password) return null;

        const passwordsMatch = await bcrypt.compare(
          password,
          user.password
        )

        if (passwordsMatch) return user


      }
    })
  ],
}