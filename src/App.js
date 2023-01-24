import "./styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import Context from './Context'
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import axios from 'axios';


export default function App() {

  const [fotos, setFotos] = useState([]);



  const getFotos = async () => {
    try {
      const res = await axios.get('/data/fotos.json');
      const photos = res.data.photos;
      const ArrayFotos = photos.map((photo) => ({
        id: photo.id,
        src: photo.src.tiny,
        desc: photo.alt,
        favorite: false
      }));
      setFotos(ArrayFotos);
    } catch (err) {
      console.log(err);
    }
  };
  

useEffect (() => {
    getFotos();
}, []);



  return (
    <div className="App">
    <Context.Provider value={{fotos, setFotos}}>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </BrowserRouter>
      </Context.Provider>
    </div>
  );
}
