import { Route, Routes} from "react-router-dom"
import axios from "axios";
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Home from "./views/home/home";
import Detail from './views/detail/detail'
import './StyleSheets/App.css';

axios.defaults.baseURL= "http://localhost:3001/gaming"

function App() {
  return (
    <div >
      <Routes>
        <Route path="/:id" element={<Detail />} />
        <Route path="/" Component={Home} />
      </Routes>
    </div>
  );
}

export default App; 
