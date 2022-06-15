import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import Link from 'next/link'
import { log } from '../utils/tasks'
import { useTasks } from '../context/taskContext'
import { router } from 'next/router'

function Navbar() {

  const {tasks, setTasks} = useTasks()

  return (
    <header className="flex items-center bg-gray-800 px-28 py-5">
        <Link href="/">{/* href irá en Link no en a (logo) */}
          <a>
            <h1 className="font-black text-lg">Task App</h1>
          </a>
        </Link>

        <span className='ml-10 text-gray-400 font-bold'> {/* Muestra cantidad de tareas */}
          {tasks.length} Tasks
        </span>

        <div className="flex-grow text-right">
          <button className="bg-[#829bcf] hover:bg-[#828bcf] px-5 py-2 font-bold rounded-md inline-flex items-center" onClick={() => {router.push('/new')}}>
            <AiOutlinePlus className='mr-2'/>
              Add Task
          </button> {/* Aquí cambio de página sin refrescar de nuevo */}
        </div>
    </header>
  )
}

export default Navbar