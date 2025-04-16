import { HandleAuth } from "@/actions/handle-auth"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"


export default async function Dashboard() {

  const session = await auth()

  if (!session) {
    redirect("/login")
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>
        {
          session?.user?.email
            ? session?.user?.email
            : 'Usuário não está logado'
        }
        {
          session?.user?.email && (
            <form
              action={HandleAuth}
            >
              <button className="border-amber-50 border-2 rounded-md p-2 cursor-pointer" type="submit">
                Logout
              </button>
            </form>
          )
        }
      </p>
    </div>
  )
}