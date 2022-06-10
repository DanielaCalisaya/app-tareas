import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
/* Google? */

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID='3947a0117981ff62a595',
      clientSecret: process.env.GITHUB_SECRET='cab7db86ddb42b92b4be975480161f5dfa4c040d',
    }),
    // ...add more providers here
  ],
})

/* la ruta api/auth/[...nextauth].js nos permite procesar cualquier ruta que venga después de api/auth ya sea facebook, email, etc */
/* providers me indica que forma de autenticarse le daré al usuario */

/* clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET, */