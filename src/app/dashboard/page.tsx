import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"


export default async function Dashboard(){

  const session = await auth()
  
  if(!session){
    redirect("/login")
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Email do usuário: {session?.user?.email ? session?.user?.email : 'Usuário não está logado'}</p>
    </div>
  )
}