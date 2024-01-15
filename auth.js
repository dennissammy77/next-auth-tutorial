import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./src/lib/db";
import { AuthConfig } from '@/auth.config';
import { getUserById } from "./data/user";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut
} = NextAuth({
  callbacks: {
    async session({session, token}){
      console.log({sessionToken: token});

      if (token.sub && session.user){
        session.user.id = token.sub;
      }

      if (token.role && session.user){
        session.user.role = token.role;
      }
      return session
    },
    async jwt({token}){
      if( !token?.sub) return token;

      const existing_user = await getUserById(token.sub);

      if (!existing_user) return token;

      token.role = existing_user.role;
      return token
    }
  },
  adapter: PrismaAdapter(db),
  session: { strategy: 'jwt'},
  ...AuthConfig
})