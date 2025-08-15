

import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";

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
            }
        })
    ]
});


export const GET = handler;
export const POST = handler;