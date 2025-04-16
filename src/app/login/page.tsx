import { HandleAuth } from "@/actions/handle-auth";

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen" >
      <h1 className="text-4xl font-bold mb-10">
        Login
      </h1>
      <form
        action={HandleAuth}
      >
        <button className="border-amber-50 border-2 rounded-md p-2 cursor-pointer" type="submit">Signin with Google</button>
      </form>
    </div>
  );
}