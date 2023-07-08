import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'
import axios from 'axios'

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks: {
    async signIn(user) {
      const { id_token } = user.account
      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_BE_URL}/auth/google/`,
          {
            access_token: id_token,
          }
        )
        const { access } = res.data
        user.account.access_token = access
        return true
      } catch (err) {
        return false
      }
    },

    async jwt(token) {
      return token
    },

    async session(session) {
      session.access_token = session.token.token.account.access_token
      return session
    }
  },
  secret: process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }