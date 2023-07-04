'use client'

import { signIn, signOut } from 'next-auth/react'

export const AuthModule = ({ session }: any) => {
  function getSession() {
    console.log(session)
  }
  return (
    <>
      <button
        onClick={() => signIn('google')}
        className="bg-black text-white"
      >
        login with google
      </button>
      <button
        onClick={() => signOut()}
        className='bg-red-500 text-white'
      >
        sign out
      </button>
      <button onClick={getSession}>
        get session
      </button>
    </>
  )
}