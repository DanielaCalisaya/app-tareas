import Navbar from './Navbar'
import { useSession } from "next-auth/react"

const Layout = ({children}) => {

  const { data: session } = useSession()
  
  return (
    <div className="h-screen bg-[#56425A] text-white">
      <Navbar/>
      <hr/>

      <main className="px-28 py-10">
        {children}
      </main>
    </div>
  )
}

export default Layout