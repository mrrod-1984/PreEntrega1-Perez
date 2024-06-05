import NavBar from './components/NavBar'


export default function App() {
  return (
    <>    
      <div className="dark:bg-slate-700 dark:text-white flex flex-row font-sans">
        <div className="basis-1/2 p-4"><p className="text-2xl font-bold ">HP Refurbished</p></div>
        <div className="basis-1/2"><NavBar /></div>
      </div>
    </>
  )
}

