import { useTasks } from "../context/taskContext";
import Layout from "../components/Layout";

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
              <div className="bg-grey-700 hover:bg-gray-600 cursor-pointer px-20 py-5 m-2 flex justify-between">
                <span>{indice}</span>
                <div>
                  <h2 className="font-bold">{task.title}</h2>
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