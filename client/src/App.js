import './index.css';
import Swal from 'sweetalert2';
import axios from "axios";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGames, getGenders, obtenerUsers } from "./redux/actions";
import { useAuth0 } from '@auth0/auth0-react';
import Home from "./views/home";
import Detail from "./views/detail";
import Pay from "./views/Pasarela/PayPage";
import Form from "./views/form";
import Landing from "./views/landing";
import Biblioteca from "./views/BibliotecaGames/Biblioteca";
import Profile from './components/Profile/Profile';
import Dashboard from './views/Dashboard';
import Soporte from './components/soporte/soporte';
// deploy
//axios.defaults.baseURL = "https://pfgames-production.up.railway.app/gaming";
// local
axios.defaults.baseURL = "http://localhost:3001/gaming";

function App() {
  const user = useSelector(state => state.user);
  const { logout } = useAuth0();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGames());
    dispatch(getGenders());
    dispatch(obtenerUsers());
  }, []);
  useEffect(() => {
    if (user.ban) {
      logout();
      Swal.fire({
        title: "User Banned",
        text: "Contact support to fix your ban",
        icon: "error",
      });
    }
  }, [user]);
  return (
    <div>
      <Routes>
        <Route path="/formGame" element={<Form />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/paypage" element={<Pay/>} />
        <Route path="/perfil" element={<Profile/>}/>
        <Route path="/videogames" element={<Home />} />
        <Route path="/biblioteca" element={<Biblioteca />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/" element={<Landing />} />
        <Route path="/soporte" element={<Soporte />} />
      </Routes>
    </div>
  );
}

export default App;
