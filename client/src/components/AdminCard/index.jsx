import style from './adminCard.module.css';
import { deleteGame, userIsBan, userIsAdmin } from '../../redux/actions';
import { useState } from 'react';
import AdminEdit from '../AdminEdit';
import AdminConfirm from '../AdminConfirm';

export default function AdminCard({ data }) {
  const [edit, setEdit] = useState(false);
  const [visible, setVisible] = useState({
    disable: false,
    ban: false,
    admin: false
  });
  function handleEdit() {
    setEdit(!edit);
  }
  return (
    <div className={style.card}>
      {
        data.idGame && <>
          <h2>{data.idGame.slice(0,8)}</h2>
          <h2>{data.nameGame}</h2>
          <h2>{data.available ? "Available" : "Not Available"}</h2>
          <button onClick={handleEdit}>edit</button>
          <button onClick={() => setVisible({ ...visible, disable: true, ban: false, admin: false })}>{data.available ? "disable" : "enable"}</button>
          {edit ? <AdminEdit dbGame={data} onEdit={handleEdit} /> : null}
        </>
      }
      {
        data.idUser && <>
          <h2>{data.idUser}</h2>
          <h2>{data.nameUser}</h2>
          <h2>{data.email}</h2>
          <h2>{data.ban ? "Banned" : "Approved"}</h2>
          {data.level.nameLevel === "standar" ? <button onClick={() => setVisible({ ...visible, disable: false, ban: false, admin: true })}>Make admin</button> : null}
          {data.level.nameLevel === "standar" ? <button onClick={() => setVisible({ ...visible, disable: false, ban: true, admin: false })}>{data.ban ? "Unban" : "Ban"}</button> : null}
        </>
      }
      {
        data.idBought && <>
          <h2>{data.idBought}</h2>
          <h2>{data.gameIdGame}</h2>
          <h2>{data.amount}</h2>
          <h2>{data.createdAt}</h2>
        </>
      }
      {visible.disable ? <AdminConfirm action={deleteGame} id={data.idGame} message="disable" data={data.available} onClose={() => setVisible({ ...visible, disable: false, ban: false, admin: false })} /> : null}
      {visible.ban ? <AdminConfirm action={userIsBan} id={data.idUser} message="ban" data={data.ban} onClose={() => setVisible({ ...visible, disable: false, ban: false, admin: false })} /> : null}
      {visible.admin ? <AdminConfirm action={userIsAdmin} id={data.idUser} message="admin" onClose={() => setVisible({ ...visible, disable: false, ban: false, admin: false })} /> : null}
    </div>
  );
}