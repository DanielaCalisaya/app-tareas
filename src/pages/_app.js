import '../styles/globals.css'
import {TasksProvider} from '../context/taskContext'

function MyApp({ Component, pageProps }) {

  return (
    <TasksProvider>
      <Component {...pageProps} />
    </TasksProvider>
  )
}

export default MyApp
/* Cualquier componente que renderize mi página estará dentro de mi TasksProvider */
