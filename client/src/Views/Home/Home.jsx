import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cards from '../../Components/Cards/Cards';
import { getGames } from '../../Redux/Actions'; // Importa la acción necesaria para obtener los juegos

const Home = () => {
  const dispatch = useDispatch();
  const allGames = useSelector((state) => state.allGames);

  useEffect(() => {
    dispatch(getGames()); // Dispatch de la acción para obtener los juegos
  }, [dispatch]);


  return (
    <div>
      <h1>Lista de Juegos</h1>
      <Cards allGames={allGames} /> {/* Renderiza el componente Cards y pasa los juegos */}
    </div>
  );
};

export default Home;

