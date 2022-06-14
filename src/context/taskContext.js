import { createContext, useContext, useState } from "react";
import { v4 as uuid } from 'uuid'; /* módulo que genera id único */

export const TaskContext = createContext();

export const useTasks = () => useContext(TaskContext)

export const TasksProvider = ({children}) => {

const [tasks, setTasks] = useState([
    {id:'1', title:'first task', description: 'some task'},
    {id:'2', title:'first task', description: 'some task'}   
])

/* creación de tarea */
const createTask = (title, description) => {
    setTasks([...tasks, {title, description, id: uuid()}
    ]) 
}
    
    return ( /* pasa las tareas y crea...  */
        <TaskContext.Provider 
            value={{tasks, createTask}}>
            {children}
        </TaskContext.Provider>

    )
}
