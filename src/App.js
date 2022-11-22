import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Error from "./pages/Error"
import About from "./pages/About"
import Login from "./pages/Login"
import Products from "./pages/Products"
import SharedLayout from "./pages/SharedLayout"

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="*" element={<Error/>}/>
        <Route path="login" element={<Login />}/>
        <Route path="products" element={<Products />}/>
      </Route>
    </Routes>
  </BrowserRouter>


  
  )
}

export default App;
