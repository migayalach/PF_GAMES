import style from "./adminSale.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import AdminCard from "../AdminCard";
import Paginado from "../Paginado/Paginado";

export default function AdminSales() {
  const sales = useSelector(state => state.comprasUser);
  const [page, setPage] = useState(1);
  const start = (page - 1) * 10;
  const end = page * 10;
  const viewSales = sales.slice(start, end);
  const handlePage = (num) => {
    setPage(num);
  }
  return (
    <main className={style.sale}>
      <article className={style.contain}>
        <div className={style.head}>
          <h2>ID</h2>
          <h2>Voucher</h2>
          <h2>Date</h2>
        </div>
        {
          viewSales && viewSales.map(sale => (
            <AdminCard key={sale.idSale} data={sale} />
          ))
        }
        <Paginado cantidadPorPag={10} juegos={sales.length} paginado={handlePage} />
      </article>
    </main>
  );
}