import style from "./adminUser.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import AdminCard from "../AdminCard";
import Paginado from "../Paginado/Paginado";

export default function AdminUsers() {
  const users = useSelector(state => state.users);
  const [page, setPage] = useState(1);
  const start = (page - 1) * 10;
  const end = page * 10;
  const viewUsers = users.slice(start, end);
  const handlePage = (num) => {
    setPage(num);
  }
  return (
    <main className={style.user}>
      <article className={style.contain}>
        <div className={style.head}>
          <h2>ID</h2>
          <h2>User</h2>
          <h2>Email</h2>
          <h2>Status</h2>
        </div>
        {
          viewUsers && viewUsers.map(user => (
            <AdminCard key={user.idUser} data={user} />
          ))
        }
        <Paginado cantidadPorPag={10} juegos={users.length} paginado={handlePage} />
      </article>
    </main>
  );
}