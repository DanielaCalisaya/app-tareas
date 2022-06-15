import { useTasks } from "../context/taskContext";
import Layout from "../components/Layout";
import { VscTrash } from 'react-icons/vsc';

const Home = () => {
  
  const {tasks} = useTasks()
  console.log(tasks);

  return (
    <Layout>
      <div className="flex justify-center">
      { tasks.length === 0 ? (
          <h2>No hay tareas...</h2>
        ) : (  /* caja contenedora, contendrá todas las tareas */
          <div className="w-7/12">
            {tasks.map((task, indice) => (
              <div className="bg-grey-700 hover:bg-gray-600 cursor-pointer px-20 py-5 m-2 flex justify-start item-center" 
                onClick={() => console.log(task.id)}
              >
                <span className="text-5x1 mr-5">{indice}</span>
                <div className="w-full">
                  <div className="flex justify-between">
                    <h2 className="font-bold">{task.title}</h2>
                    <button className="bg-red-700 hover:bg-red-600 px-3 py-1 inline-flex items-center">
                      <VscTrash className="mr-2"/>
                      Delete
                    </button>
                  </div>       
                  <p className="text-gray-300">{task.description}</p>
                  <span className="text-gray-400">{task.id}</span>
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