import React from "react";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";
import Ayuda from "./components/Ayuda";
import "./main.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
      <div>
        <BrowserRouter>
          
          <Navbar />

          <Routes>
            <Route path="/" element={<ItemListContainer/>}></Route>
            <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
            <Route path="/productos" element={<ItemListContainer/>}></Route>
            <Route path="/productos/:categoria" element={<ItemListContainer/>}></Route>
            <Route path="/Ayuda" element={<Ayuda/>}></Route>
          </Routes>


        </BrowserRouter>
      </div>
  );
}

export default App;
