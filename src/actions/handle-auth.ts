"use server"

import { signIn } from "@/lib/auth"

export async function HandleAuth(){
  await signIn("google")
}