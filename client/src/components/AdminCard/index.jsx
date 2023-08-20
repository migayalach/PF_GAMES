import style from './adminCard.module.css';
import { deleteGame, userIsBan, userIsAdmin } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import AdminEdit from '../AdminEdit';

export default function AdminCard({ data }) {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  function handleEdit() {
    setEdit(!edit);
  }
  return (
    <div className={style.card}>
      {
        data.idGame && <>
          <h2>{data.idGame}</h2>
          <h2>{data.nameGame}</h2>
          <h2>{data.available ? "Available" : "Not Available"}</h2>
          <button onClick={handleEdit}>edit</button>
          <button onClick={() => dispatch(deleteGame(data.idGame))}>{data.available ? "disable" : "enable"}</button>
          {edit ? <AdminEdit dbGame={data} onEdit={handleEdit} /> : null}
        </>
      }
      {
        data.idUser && <>
          <h2>{data.idUser}</h2>
          <h2>{data.nameUser}</h2>
          <h2>{data.email}</h2>
          <h2>{data.ban ? "Banned" : "Approved"}</h2>
          {data.level.nameLevel === "standar" ? <button onClick={() => dispatch(userIsAdmin(data.idUser))}>Make admin</button> : null}
          <button onClick={() => dispatch(userIsBan(data.idUser))}>{data.ban ? "Unban" : "Ban"}</button>
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