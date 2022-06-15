import Layout from "../components/Layout"
/* import { handleAddTaks } from '../utils/tasks'  */
import { useState } from "react";
import { useTasks } from "../context/taskContext";
import { useRouter } from 'next/router';

const TaskFormPage = () => { 

  /* El estado y lo que contiene ese estado */
  const [task, setTaks] = useState({
    title:'',
    description:''
  });

  const {createTask} = useTasks()

  const {push} = useRouter()

  /* Captura el cambio que hay dentro del form */
  const handleChange = (e) => {
    const {name, value} = e.target;
    setTaks({...task, [name] : value})
  }

  /* Función que se le pasará al form, capturará el evento crea la tarea y desp permite guardarla  */
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(task.title, task.description)
    push("/")
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit}> 
        <h1>Add tasks</h1>

        <input 
          type="text" 
          name="title"
          placeholder="White a title" 
          className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5"
          onClick={handleChange}
        />

        <textarea 
          name="description"
          rows="2"
          placeholder="White a description"
          className="bg-gray-800 focus:text-gray-100 focus:outline-none w-full py-3 px-4 mb-5"
          onClick={handleChange}
        ></textarea>

        <button className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded-sm enabled:hover:border-gray-400 disabled:opacity-30" disabled={!task.title}>
          Save
        </button>{/* enabled:hover:border-gray-400 */}

      </form>     
    </Layout>
  )
}

export default TaskFormPage