import { getServerSession } from "next-auth";
import { AuthModule } from "./AuthModule";
import { authOptions } from "./api/auth/[...nextauth]/route";

async function getUser() {
  const session = await getServerSession(authOptions)
  console.log(session)
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
