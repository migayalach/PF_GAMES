import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { checkUser } from "../../redux/actions";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user, isAuthenticated, } = useAuth0();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user && user.name && user.email) {
      dispatch(checkUser(user.name, user.email));
    }
  }, []);

  const aux = useSelector((state) => state.levelUser);
  const acceso = aux?.access;
  return (
    isAuthenticated && (
      <div>
        
        <img src={user.picture} alt={user.name} />
      <p>{acceso === "admin" && <h1>Cuenta ADMIN </h1>}
      {acceso === "standar" && <h1>Cuenta Standar</h1>}</p>
        <h2>{user.name}</h2>
        <h2>{user.email}</h2>
        <Link to="/"> 
        <button>Home</button>
      </Link>
      </div>
    )
  );
};

export default Profile;
