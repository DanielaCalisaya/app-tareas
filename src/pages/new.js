import Layout from "../components/Layout"
/* import { handleAddTaks } from '../utils/tasks'  */
import { useEffect, useState } from "react";
import { useTasks } from "../context/taskContext";
import { useRouter } from 'next/router';
import { useSession } from "next-auth/react"//

const TaskFormPage = () => { 

  /* El estado y lo que contiene ese estado */
  const [task, setTaks] = useState({
    title:'',
    description:''
  });

  const { createTask, updateTask, tasks } = useTasks()

  const { push, query } = useRouter()

  /* Captura el cambio que hay dentro del form */
  const handleChange = (e) => {
    const {name, value} = e.target;
    setTaks({...task, [name] : value})
  }

  /* Función que se le pasará al form, capturará el evento crea la tarea y desp permite guardarla  */
  const handleSubmit = (e) => {
    e.preventDefault();

    if(!query.id) {
      createTask(task.title, task.description)
    }else{
      updateTask(query.id, task)
    }
    
    push("/") 
  }

  useEffect(() => {
    if(query.id) {
      const taskFound = tasks.find((task) => task.id === query.id)
      if(taskFound)
      setTaks({title: taskFound.title, description: taskFound.description})
    }
  },[query.id]);

  return (
    <Layout>
      <div className="flex justify-center items-center h-full">
      <form onSubmit={handleSubmit} className="bg-gray-700 p-10 h-2/4"> 
        <h1 className="text-3xl mb-7 font-bold">{query.id ? "Update a Task" : "Create a Taks"}</h1>

        <input 
          type="text" 
          placeholder="White a title" 
          autoFocus
          className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5"
          name="title"
          onChange={handleChange}
          value={task.title}
        />

        <textarea 
          rows="2"
          placeholder="White a description"
          className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5"
          name="description"
          onChange={handleChange}
          value={task.description}
        ></textarea>

        <button className="bg-[#829bcf] hover:bg-[#828bcf] font-bold px-4 py-2 rounded-md" disabled={!task.title}> {/* disabled:opacity-90 */}
          Save
        </button>

      </form> 
      </div>
         
    </Layout>
  )
}

export default TaskFormPage