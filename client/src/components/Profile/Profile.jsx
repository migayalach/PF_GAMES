import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { checkUser } from "../../redux/actions";
import { useEffect } from "react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user && user.name && user.email) {
      dispatch(checkUser(user.name, user.email));
    }
  }, []);

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <h2>{user.email}</h2>
      </div>
    )
  );
};

export default Profile;
