import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { checkUser } from "../../redux/actions";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAccessStandar } from "../../hooks/useAccessStandar";
import Encabezado from "../../views/encabezado/encabezado";
import style from "./Profile.module.css";

const Profile = () => {
  const { user, isAuthenticated, } = useAuth0();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user && user.name && user.email) {
      dispatch(checkUser(user.name, user.email));
    }
  }, []);

  const dbUser = useSelector((state) => state.user);
  const acceso = dbUser?.level?.nameLevel;
  useAccessStandar();
  return (
    isAuthenticated && (
      <>
        <Encabezado/>
        <div className={style.container}>
          <img src={user.picture} alt={user.name} className={style.img} />
          <p>{acceso === "admin" && <h1>Cuenta ADMIN </h1>}
            {acceso === "standar" && <h1>Cuenta Standar</h1>}</p>
          <div>
          <h2 className={style.userName}>{user.name}</h2>
          <h2 className={style.userMail}>{user.email}</h2>
          </div>
          <Link to="/">
            <button className={style.btn}>Home</button>
          </Link>
        </div>
      </>
    )
  );
};

export default Profile;
