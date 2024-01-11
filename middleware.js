import {AuthConfig} from "./auth.config";
import NextAuth from "next-auth";

const { auth } = NextAuth(AuthConfig)

export default auth((req) => {
    const isLogged = !!req.auth;
    console.log('Route:', req.nextUrl.pathname)
    console.log('ISLOGGEDIN:', isLogged)
})

// Optionally, don't invoke Middleware on some paths
export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}