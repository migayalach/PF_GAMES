import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export function useAccessAdmin() {
  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  useEffect(() => {
    if (!user.idUser) navigate("/");
    if (user.idUser && user.idLevel === 2) navigate("/");
  }, []);
}