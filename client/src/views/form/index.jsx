import style from "./form.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from 'react-router-dom'
import { postGame } from "../../redux/actions";
import { useAccessAdmin } from "../../hooks/useAccessAdmin";
import validation from "../../utils/validation";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const resGenders = useSelector(({ genres }) => genres);
  const [data, setData] = useState({
    nombre: "",
    descripcion: "",
    imagen: null,
    genero: [],
    costo: "",
  });
  const [errors, setErrors] = useState({
    nombre: "",
    descripcion: "",
    imagen: null,
    genero: [],
    costo: "",
  });

  const handleImgChange = (event) => {
    setData({
      ...data,
      imagen: event.target.files[0]
    });
  }

  const handleChange = (event) => {
    if (event.target.name === "genero") {
      let aux = event.target.value;
      if (aux.length > 0) {
        if (!data.genero.includes(aux)) {
          setData({
            ...data,
            genero: [...data.genero, aux],
          });
        } else {
          const arr = data.genero.filter((index) => index !== aux);
          setData({
            ...data,
            genero: arr,
          });
          setErrors(validation({ ...data, genero: arr }));
        }
      }
    } else {
      setData({
        ...data,
        [event.target.name]: event.target.value,
      });
      setErrors(
        validation({
          ...data,
          [event.target.name]: event.target.value,
        })
      );
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postGame(data))
    navigate('/');
  };

  useAccessAdmin();
  return (
    <div className={style.create}>
      <div className={style.head}>
        <NavLink to='/admin'>◀</NavLink>
        <h1>Create Video Game</h1>
      </div>
      <form className={style.form} onSubmit={handleSubmit}>
        <label htmlFor="nombre">
          <span>Videogame name</span>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={data.nombre}
            onChange={handleChange}
          />
        </label>
        {errors.nombre && <p>{errors.nombre}</p>}
        <label htmlFor="descripcion">
          <span>Description</span>
          <textarea
            name="descripcion"
            value={data.descripcion}
            onChange={handleChange}
          ></textarea>
        </label>
        {errors.descripcion && <p>{errors.descripcion}</p>}
        <label htmlFor="imagen">
          <span>Image</span>
          <input
            type="file"
            name="imagen"
            onChange={handleImgChange}
          />
        </label>
        {errors.imagen && <p>{errors.imagen}</p>}
        <label htmlFor="genero">
          <span>Genders</span>
          <select name="genero" onChange={handleChange}>
            <option></option>
            {resGenders.map(({ idGenders, nameGenders }) => (
              <option
                key={idGenders}
                value={data.nameGenders}
                onChange={handleChange}
              >
                {nameGenders}
              </option>
            ))}
          </select>
        </label>
        {data.genero.length > 0 ? <ul>
          {
            data.genero.map(gn => <li key={gn}>{gn}</li>)
          }
        </ul> : <p>{errors.genero}</p>}
        <label htmlFor="costo">
          <span>Cost</span>
          <input
            type="text"
            name="costo"
            value={data.costo}
            onChange={handleChange}
          />
        </label>
        {errors.costo && <p>{errors.costo}</p>}
        <button disabled={Object.keys(errors).length === 0 ? false : true}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
