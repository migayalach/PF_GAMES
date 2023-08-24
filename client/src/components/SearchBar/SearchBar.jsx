import style from './SearchBar.module.css'
import Swal from "sweetalert2"; //Importación de la libreria sweetalert2 que permite mostrar alertas bien GG's
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGameByName, getGames } from "../../redux/actions";
import { Link } from "react-router-dom";
import Loading from "../../utils/Loading/Loading";

const SearchBar = () => {

    const [name, setName] = useState("");
    const [busqueda, setBusqueda] = useState(false);
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const juegos = useSelector((state) => state.games)

    const handleChange = (event) => {
        event.preventDefault();
        setName(event.target.value);
    };

    if (busqueda === true && juegos.length === 0) {
        Swal.fire({
            text: "No results found for your search...",
            icon: "info",
            confirmButtonText: "ok",
        });
    }

    const handleSubmit = () => {
        setName("");
        if (!name.length) {
            Swal.fire({
                text: "You must enter a search parameter",
                icon: "info",
                confirmButtonText: "ok",
            });
        } else {
            setLoading(true);
            dispatch(getGameByName(name));
            setLoading(false);
            setBusqueda(true);
        }
    };

    const handleClear = (event) => {
        event.preventDefault();
        setBusqueda(false)
        dispatch(getGames());
    }

    return (
        <div className={style.search}>
            <form className={style.form}>
                <input
                    type="search"
                    onChange={(event) => handleChange(event)}
                    value={name}
                    className={style.inputSearch}
                    placeholder="Search videogame... "
                />
                <span
                    onClick={() => handleSubmit()}
                    className={style.btnSearch}>
                </span>
                {
                    juegos.length < 100
                        ? <button
                            type="submit"
                            onClick={(event) => handleClear(event)}
                            className={style.btnClear}
                        />
                        : null
                }
            </form>
            {loading && <Loading />}
        </div>
    )
}

export default SearchBar;