import { useTasks } from "../context/taskContext";
import Layout from "../components/Layout";
import { VscTrash } from 'react-icons/vsc';
import { useRouter } from 'next/router';
import { useSession } from "next-auth/react" 
import { router } from 'next/router' 

const Home = () => {
  
  const { tasks, deleteTask } = useTasks();
  const { push } = useRouter();
  const { data: session } = useSession()

  return (
    <Layout>
      <div className="flex justify-center">
      { tasks.length === 0 ? (
          <h2 className="font-bold">You don't have tasks</h2>/* className="font-mono" */
        ) : (  /* caja contenedora, contendrá todas las tareas */
          <div className="w-7/12">
            {tasks.map((task, indice) => (
              <div className="bg-gray-800 hover:bg-gray-700 cursor-pointer px-20 py-5 m-2 flex justify-start item-center" 
              key={task.id}  
              onClick={() => push('/edit/' + task.id)}
              >
                <span className="text-5x1 mr-5">{indice}</span>
                <div className="w-full">
                  <div className="flex justify-between">
                    <h2 className="font-bold">{task.title}</h2>
                    <button className="bg-red-500 hover:bg-red-400 font-bold px-3 py-1 inline-flex items-center rounded-md"
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteTask(task.id)
                      }}
                      >
                      <VscTrash className="mr-2"/>
                      Delete
                    </button>
                  </div>       
                  <p className="text-gray-300">{task.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout> 
  )
}

export default Home;