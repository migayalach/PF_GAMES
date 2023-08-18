import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export function useAccessStandar() {
  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  });
}