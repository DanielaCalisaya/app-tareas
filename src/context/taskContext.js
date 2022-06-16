import { createContext, useContext, useState } from "react";
import { v4 as uuid } from 'uuid'; /* módulo que genera id único */

export const TaskContext = createContext();

export const useTasks = () => useContext(TaskContext)

export const TasksProvider = ({children}) => {

    const [tasks, setTasks] = useState([
       /*  {id:'1', title:'first task', description: 'some task'},
        {id:'2', title:'first task', description: 'some task'}    */
    ])

    /* creación de tarea */
    const createTask = (title, description) => 
        setTasks([...tasks, { id: uuid(), title, description }]) 
        
    /* actualizar tarea */
    const updateTask = (id, updatedTask) => 
        setTasks([...tasks.map((task) => task.id === id ? {...task, ...updatedTask} : task)
    ]);

    /* borrar tarea */
    const deleteTask = (id) => setTasks([...tasks.filter((task) => task.id !== id)])

   /*  const set = (tasks) => {setTasks(tasks)} */
    
    return ( /* Pasamos todas las funciones */
        <TaskContext.Provider 
            value={{ tasks, createTask, updateTask, deleteTask }}>
            {children}
        </TaskContext.Provider>

    )
}
