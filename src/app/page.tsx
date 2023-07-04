import { getServerSession } from "next-auth";
import { AuthModule } from "./AuthModule";
import { authOptions } from "./api/auth/[...nextauth]/route";

export async function getUser() {
  'use server'
  const session = await getServerSession(authOptions)
  return session
}

export default async function Home() {
  const session = await getUser()
  return (
    <main>
      <AuthModule session={session} />
    </main>
  )
}
