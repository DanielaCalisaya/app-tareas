import { createContext, useContext, useState } from "react";

export const TaskContext = createContext();

export const useTasks = () => useContext(TaskContext)


export const TasksProvider = ({children}) => { /* Cualquier componente hijo que me pasen va a poder acceder a Provider */
    
const [tasks, setTasks] = useState([{id:'1', title:'first task', description: 'some task'}]); /* creando una especie de variable en donde pueda guardar los datos */

    return <TaskContext.Provider value={{tasks}}>{children}</TaskContext.Provider>

}