import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGameByName, getGames } from "../../redux/actions";
import estilo from './SearchBar.module.css'
import Swal from "sweetalert2"; //Importación de la libreria sweetalert2 que permite mostrar alertas bien GG's

const SearchBar = () => {

    const [name, setName] = useState("");
    const [busqueda, setBusqueda] = useState(false);
    const dispatch = useDispatch();
    const juegos = useSelector((state) => state.games)

    // console.log("SEARCH", juegos);

    const handleChange = (event) => {
        event.preventDefault();
        setName(event.target.value);
    };

    if (busqueda === true && juegos.length === 0) {
        Swal.fire({
          text: "No hay resultados de tu busqueda :c",
          icon: "info",
          confirmButtonText: "ok",
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setName("");
        if (!name.length) {
            Swal.fire({
              text: "Debes ingresar un parametro de busqueda.",
              icon: "info",
              confirmButtonText: "ok",
            });
        } else{
            dispatch(getGameByName(name));
            setBusqueda(true);
        }
    };

    const handleClear = (event) => {
        event.preventDefault();
        setBusqueda(false)
        dispatch(getGames());
    }

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <form style={{ display: "flex", justifyContent: "center" }} action="">
                <input
                    type="search"
                    onChange={(event) => handleChange(event)}
                    value={name}
                    className={estilo.inputSearch}
                    placeholder="Buscar videojuego..."
                />
                <button
                    type="submit"
                    onClick={(event) => handleSubmit(event)}
                    className={estilo.btnSearch}
                />
                {
                    busqueda ?
                        <button
                            type="submit"
                            onClick={(event) => handleClear(event)}
                            className={estilo.btnClear}
                        />
                    : <></>
                }
            </form>
        </div>
    )
}

export default SearchBar;