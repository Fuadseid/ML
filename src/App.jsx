import Header from "./Component/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Predict from "./Pages/Predict";
import Contact from "./Pages/Contact";
import About from "./Pages/About";



function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route index element ={<Home/>}/>
      <Route path='predict' element={<Predict/>}/>
      <Route path="contact" element ={<Contact/>}/>
      <Route path='about' element ={<About/>}/>

    </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App
