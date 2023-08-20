import style from "./adminSale.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminCard from "../AdminCard";
import Paginado from "../Paginado/Paginado";
import { getCompras } from "../../redux/actions";

export default function AdminSales() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCompras());
  }, [])
  const sales = useSelector(state => state.ventas);
  console.log("PROBANDO", sales);
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
          <h2>Amount</h2>
          <h2>Date</h2>
        </div>
        {
          viewSales && viewSales.map(sale => (
            <AdminCard key={sale.idBought} data={sale} />
          ))
        }
        <Paginado cantidadPorPag={10} juegos={sales.length} paginado={handlePage} />
      </article>
    </main>
  );
}