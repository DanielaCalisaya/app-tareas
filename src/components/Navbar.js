import React from 'react'
import { AiOutlinePlus, AiOutlineUser } from 'react-icons/ai'
import Link from 'next/link'
import { useTasks } from '../context/taskContext'
import { router } from 'next/router'
import { useSession } from "next-auth/react"

function Navbar() {

  const {tasks, setTasks} = useTasks()
  const { data: session } = useSession()

  return (
    <header className="flex items-center bg-gray-800 px-40 py-5">
        <Link href="/">{/* href irá en Link no en a (logo) */}
          <a>
            <h1 className="font-black text-lg font-mono font-bold">Task App</h1>
          </a>
        </Link>

        <span className='ml-4 text-gray-400'> {/* Muestra cantidad de tareas */}
          {tasks.length} Tasks
        </span>

        <div className="flex-grow text-right">

        <button className="bg-[#829bcf] hover:bg-[#828bcf] px-3 py-2 font-bold rounded-md inline-flex items-center mr-2" disabled={!session} onClick={() => {router.push('/new')}}>
          <AiOutlinePlus className='mr-2'/>
            Add Task
        </button>

          {
            session ? (
              <>
              <button className="bg-[#829bcf] hover:bg-[#828bcf] px-3 py-2 font-bold rounded-md inline-flex items-center" onClick={() => {router.push('/api/auth/signout')}}>
                <AiOutlineUser className='mr-2'/>
                    Logout
              </button>
              </>
            ) : (
              <>
              <button className="bg-[#829bcf] hover:bg-[#828bcf] px-3 py-2 font-bold rounded-md inline-flex items-center" onClick={() => {router.push('/api/auth/signin')}}>
                <AiOutlineUser className='mr-2'/>
                    Login
              </button> 
              </>
            )
          }

        </div>
    </header>
  )
}

export default Navbar