import style from "./adminNav.module.css";
import { Link } from "react-router-dom";

export default function AdminNavbar({ onGames, onUsers, onSales, active }) {
  return (
    <aside className={style.nav}>
      <Link to='/'>◀</Link>
      <button id={active.games ? style.active : ""} onClick={onGames}>Games</button>
      <button id={active.users ? style.active : ""} onClick={onUsers}>Users</button>
      <button id={active.sales ? style.active : ""} onClick={onSales}>Sales</button>
    </aside>
  );
}