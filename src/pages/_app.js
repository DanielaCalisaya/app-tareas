import '../styles/globals.css'
import { TasksProvider } from '../context/taskContext'
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: {session, ...pageProps}}) {

  return (
    <SessionProvider session={session}>
      <TasksProvider>
        <Component {...pageProps} />
      </TasksProvider>
    </SessionProvider>
  )
}

export default MyApp