

import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";



console.log(process.env.NEXTAUTH_SECRET);
const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "example@gmail.com" },
                password: { label: "Password", type: "password", placeholder: "abc.."}
            }, 
            async authorize(credentials, req) {
                
                return {
                    username: "example",
                    id: "1",
                    email: "example@gmail.com"
                }
            },
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
});


export const GET = handler;
export const POST = handler;