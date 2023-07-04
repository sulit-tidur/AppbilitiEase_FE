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
      // if (account.provider !== 'google') {
      //   return false
      // }
      const { access_token, id_token } = user.account
      console.log(user)
      try {
        const res = await axios.post(
          'http://127.0.0.1:8000/auth/google/',
          {
            access_token: id_token,
          }
        )
        const { key } = res.data
        console.log(key)
        user.access_token = key
        return true
      } catch (err) {
        return false
      }
    },

    async jwt(token, user) {
      // console.log(user, "tes")
      // console.log(token)
      if (token) {
        const { access_token } = token
        token.access_token = access_token
      }

      return token
    },

    async session(session, user) {
      session.access_token = user.access_token
      console.log(session.access_token)
      return session
    }
  },
  secret: process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }