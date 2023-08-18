import { useState } from "react";
import validation from "../../utils/validation";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { postGame } from "../../redux/actions";
import { useAccessAdmin } from "../../hooks/useAccessAdmin";

const Form = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const resGenders = useSelector(({ genres }) => genres);
  const [data, setData] = useState({
    nombre: "",
    descripcion: "",
    imagen: null,
    genero: [],
    costo: 0,
  });
  const [errors, setErrors] = useState({});

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
    <div>
      <h1>Crear un juego</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre del juego: </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={data.nombre}
          onChange={handleChange}
        />
        {errors.nombre && <p>{errors.nombre}</p>}
        <br />
        <br />
        <label htmlFor="descripcion">Descripcion: </label>
        <input
          type="text"
          name="descripcion"
          value={data.descripcion}
          onChange={handleChange}
        />
        {errors.descripcion && <p>{errors.descripcion}</p>}
        <br />
        <br />
        <label htmlFor="imagen">Imagen: </label>
        <input
          type="file"
          name="imagen"
          onChange={handleImgChange}
        />
        {errors.imagen && <p>{errors.imagen}</p>}
        <br />
        <br />
        <label htmlFor="genero">Genero: </label>
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
        {data.genero.length > 0 ? <p>{data.genero}</p> : <p>{errors.genero}</p>}
        <br />
        <br />
        <label htmlFor="costo">Costo: </label>
        <input
          type="text"
          name="costo"
          value={data.costo}
          onChange={handleChange}
        />
        {errors.costo && <p>{errors.costo}</p>}
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
