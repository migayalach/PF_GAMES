import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getGames, getGenders } from "./redux/actions";
import axios from "axios";
import React, { useEffect } from "react";
import "./StyleSheets/App.css";
import Home from "./views/home";
import Detail from "./views/detail";
import Pay from "./views/Pasarela/PayPage";
import Form from "./views/form";
import Landing from "./views/landing";

axios.defaults.baseURL = "http://localhost:3001/gaming";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGames());
    dispatch(getGenders());
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/formGame" element={<Form />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/PayPage" element={<Pay/>} />
        <Route path="/videogames" element={<Home />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
