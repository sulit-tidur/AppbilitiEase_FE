import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"
import axios from 'axios'

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks: {
    async signIn(user, account) {
      if (account.provider !== 'google') {
        return false
      }

      const { accessToken, idToken } = account

      try {
        const res = await axios.post(
          'http://127.0.0.1:8000/auth/google/',
          {
            access_token: accessToken,
            id_token: idToken
          }
        )

        const { access_token } = res.data
        user.accessToken = access_token
        return true
      } catch (err) {
        return false
      }
    },

    async jwt(token, user) {
      if (user) {
        const { accessToken } = user
        token.accessToken = accessToken
      }

      return token
    },

    async session(session, user) {
      session.accessToken = user.accessToken
      return session
    }
  },
  secret: process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }