import { useState } from "react";
import { useDispatch } from "react-redux";
import estilo from './SearchBar.module.css'


const SearchBar = () => {

    const [name, setName] = useState("");
    const dispatch = useDispatch();

    const handleChange = (event) => {
        event.preventDefault();
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setName("");
        //dispatch(getByNameTag(name));
    };

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
            </form>
        </div>
    )
}

export default SearchBar;