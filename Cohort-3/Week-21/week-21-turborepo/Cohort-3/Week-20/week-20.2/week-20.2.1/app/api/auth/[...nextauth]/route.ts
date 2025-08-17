

import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";




const handler = NextAuth({
providers: [
  CredentialsProvider({
    // The name to display on the sign in form (e.g. "Sign in with...")
    name: "email",
    credentials: {
      username: { label: "Username", type: "text", placeholder: "example@gmail.com" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
      const username = credentials?.username;
      const password = credentials?.password;
      console.log(username);
      console.log(password);


      // db requestr to check if this username and password are correct
      const user = {
        name: "harkirat", 
        id: "1", 
        username: "harkirat@gmai.com"
      }

      if(user) {
        return user;
      } else {
        return null;
      }
    }
  })

]
})

export { handler as GET, handler as POST }






