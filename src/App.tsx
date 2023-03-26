import { useState } from 'react'
 
import './App.css'
import Navbar from "./Components/Navbar"
import { Routes,Route}  from "react-router-dom"
import Drivers from './Pages/Drivers'
import ForYou from './Pages/ForYou'
import Home from './Pages/Home'
import Industries from './Pages/Industries'
import Products from './Pages/Products'
import Shop from './Pages/Shop'
import Solutions from './Pages/Solutions'
import Support from './Pages/Support'
function App() {
   

  return (
    <div className="App">
      <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/products" element={<Products/>}></Route>
    <Route path="/solutions" element={<Solutions/>}></Route>
    <Route path="/industries" element={<Industries/>}></Route>
    <Route path="/foryou" element={<ForYou/>}></Route>
    <Route path="/shop" element={<Shop/>}></Route>
    <Route path="/drivers" element={<Drivers/>}></Route>
    <Route path="/support" element={<Support/>}></Route>
   </Routes>
    </div>
  )
}

export default App
