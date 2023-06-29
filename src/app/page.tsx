'use client'

import { signIn, signOut } from 'next-auth/react'

export default function Home() {
  return (
    <main>
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
    </main>
  )
}
