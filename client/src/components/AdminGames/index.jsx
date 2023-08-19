import style from "./adminGame.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AdminCard from "../AdminCard";
import Paginado from "../Paginado/Paginado";

export default function AdminGames() {
  const games = useSelector(state => state.adminGames);
  const [page, setPage] = useState(1);
  const start = (page - 1) * 10;
  const end = page * 10;
  const viewGames = games.slice(start, end);
  const handlePage = (num) => {
    setPage(num);
  }
  return (
    <main className={style.game}>
      <article className={style.contain}>
        <div className={style.head}>
          <h2>ID</h2>
          <h2>Game</h2>
          <h2>Status</h2>
          <Link to='/formGame'>Create Game</Link>
        </div>
        {
          viewGames && viewGames.map(gm => (
            <AdminCard key={gm.idGame} data={gm} />
          ))
        }
        <Paginado cantidadPorPag={10} juegos={games.length} paginado={handlePage} />
      </article>
    </main>
  );
}