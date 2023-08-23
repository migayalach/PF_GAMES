import style from "./confirm.module.css";
import { useDispatch } from "react-redux";

export default function AdminConfirm({ action, id, message, data, onClose }) {
  const dispatch = useDispatch();
  function dispatchAction() {
    dispatch(action(id));
    onClose();
  }
  return (
    <aside className={style.confirm}>
      <p>
        {message === 'admin' ? "Are you sure you want to grant administrator permissions?" : null}
        {message === 'ban' ? data ? "Are you sure you want to admit the user?" : "Are you sure you want to ban the user?" : null}
        {message === 'disable' ? data ? "Are you sure you want to disable this game?" : "Are you sure you want to enable this game?" : null}
      </p>
      <div className={style.btn}>
        <button onClick={dispatchAction}>Accept</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </aside>
  );
}