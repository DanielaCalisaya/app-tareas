import Navbar from './Navbar'

const Layout = ({children}) => {

  return (
    <div className="h-screen bg-gray-900 text-white">
      <Navbar/>
      <hr/>

      <main className="px-28 py-10">
        {children}
      </main>
    </div>
  )
}

export default Layout