import { BrowserRouter } from "react-router-dom"
import "./App.css"
import Routers from './routers/Routers'
import DataProvider from "./conponentes/context/DataContext"

function App() {

  return (
  <>
    <BrowserRouter>
    <DataProvider>
     <Routers/> 
     </DataProvider>
    </BrowserRouter>
    </>
  )
}

export default App
