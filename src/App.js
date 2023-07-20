import Header from "./components/Header";
import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import Hastalar from "./pages/hastalar";
import Add from "./pages/Add";






function App() {
  return (
   
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/Hastalar" element={<Hastalar/>}></Route>
    <Route path="/hasta-ekle" element={<Add/>}></Route>
   
   </Routes>
   </BrowserRouter>
  );
}

export default App;
