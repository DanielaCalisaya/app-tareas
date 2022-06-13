const Layout = ({children}) => {
  return (
    <div className="h-screen bg-gray-900 text-white">
        <header className="flex bg-gray-800 px-28 py-5">
            <h1 className="font-black text-lg">Task App</h1>

            <div className="flex-grow text-right">
                <button className="bg-green-500 hover:bg-green-400 px-5 py-2 font-bold rounded">Add Task</button>   
            </div>
        </header>
        <hr/>{/*  */}
        <main className="px-28">
            {children}
        </main>
    </div>
  )
}

export default Layout