import Navbar from './Navbar'
import { useSession } from "next-auth/react"
import { useEffect } from 'react'
import { useRouter } from 'next/router';

const Layout = ({children}) => {

  const { data: session } = useSession()
  const { push } = useRouter()
  
  useEffect(() => {
    if(session === null){push('/api/auth/signin')} 
   },[session]);

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