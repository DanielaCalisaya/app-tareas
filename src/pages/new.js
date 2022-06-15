import Layout from "../components/Layout"
/* import { handleAddTaks } from '../utils/tasks'  */
import { useEffect, useState } from "react";
import { useTasks } from "../context/taskContext";
import { useRouter } from 'next/router';

const TaskFormPage = () => { 

  /* El estado y lo que contiene ese estado */
  const [task, setTaks] = useState({
    title:'',
    description:''
  });

  const { createTask, updateTask, tasks } = useTasks()
  const router = useRouter()

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
    if(router.query.id) {
      const taskFound = tasks.find((task) => task.id === router.query.id)
      if(taskFound)
      setTaks({title: taskFound.title, description: taskFound.description})
    }
  },[router.query.id]);

  return (
    <Layout>
      <form onSubmit={handleSubmit}> 
        <h1>{router.query.id ? "Update a Task" : "Create a Taks"}</h1>

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
          rows="2"/* cold="2" */
          placeholder="White a description"
          className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5"
          name="description"
          onChange={handleChange}
          value={task.description}
        ></textarea>

        <button className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded-sm disabled:opacity-30" disabled={!task.title}>
          Save
        </button>{/* enabled:hover:border-gray-400 */}

      </form>     
    </Layout>
  )
}

export default TaskFormPage