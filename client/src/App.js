import { Route, Routes} from "react-router-dom"
import { useDispatch } from 'react-redux'
import { getGames, getGenders } from "./redux/actions"
import axios from "axios";
import React, { useEffect} from 'react';
import Home from "./views/home/home";
import Detail from './views/detail/detail'
import './StyleSheets/App.css';

axios.defaults.baseURL= "http://localhost:3001/gaming"

function App() {
    const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getGames());
    dispatch(getGenders());
  }, []);
  return (
    <div >
      <Routes>
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/" Component={Home} />
      </Routes>
    </div>
  );
}

export default App; 
