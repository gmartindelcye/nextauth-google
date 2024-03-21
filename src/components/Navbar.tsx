"use client"
import Link from "next/link"
import Image from "next/image"
import { signIn, useSession, signOut } from "next-auth/react"


function Navbar() {

  const {data: session} = useSession()

  return (
    <nav className="bg-slate-900 flex items-center py-3 justify-between text-white px-24">
      <Link href="/">
        <h1>
            NextGoogle
        </h1>
      </Link>
      {session?.user ? (
        <div>
 
          <Link href={"/dashboard"}>
            Dasboard
          </Link>
          <button 
            onClick={ async() => 
            await signOut({
              callbackUrl: "/",
            })
            } className="bg-sky-800 hover:bg-sky-400 text-white font-bold py-1 px-3 ml-10 rounded">
            Logout
          </button>
        </div>
      ) : (
        <button onClick={() => signIn()} className="bg-sky-800 hover:bg-sky-400 text-white font-bold py-1 px-3 ml-10 rounded">
          Sign In
        </button>
      )}
    </nav>
  )
}

export default Navbar