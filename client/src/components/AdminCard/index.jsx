import style from './adminCard.module.css';

export default function AdminCard({ data }) {
  return (
    <div className={style.card}>
      {
        data.idGame && <>
          <h2>{data.idGame}</h2>
          <h2>{data.nameGame}</h2>
          <h2>{data.available ? "Available" : "Not Available"}</h2>
        </>
      }
      {
        data.idUser && <>
          <h2>{data.idUser}</h2>
          <h2>{data.nameUser}</h2>
          <h2>{data.email}</h2>
          <h2>{data.ban ? "Banned" : "Approved"}</h2>
        </>
      }
      {
        data.idSale && <>
          <h2>{data.idSale}</h2>
          <h2>{data.numVoucher}</h2>
          <h2>{data.dataSale}</h2>
        </>
      }
    </div>
  );
}