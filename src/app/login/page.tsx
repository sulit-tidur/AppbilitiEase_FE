import { AuthModule } from "../../components/modules/AuthModule";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth"

export default async function Login() {
  const session = await getServerSession(authOptions)
  return (
    <AuthModule session={session} />
  )
}