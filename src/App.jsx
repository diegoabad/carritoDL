import { Route, Routes } from "react-router-dom"
import Landing from "./views/Landing"
import Products from "./views/Products"
import Navbar from "./components/Navbar"

function App() {
 return (
    <>
    <Navbar/>
     <Routes>
      <Route path={"/"} element={<Landing/>}/>
      <Route path={"/products"} element={<Products/>}/>
      <Route path={"/cart"} element={<Products/>}/>
      <Route path={"/products:/id"} element={<Products/>}/>
     </Routes>
    </>
  )
}

export default App
