import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
    ]
})

/* la ruta api/auth/[...nextauth].js nos permite procesar cualquier ruta que venga después de api/auth ya sea facebook, email, etc */
/* providers me indica que forma de autenticarse le daré al usuario */