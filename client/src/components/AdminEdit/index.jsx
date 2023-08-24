import style from "./edit.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import validateAdmin from "../../utils/validateAdmin";
import { putGame } from "../../redux/actions";

export default function AdminEdit({ dbGame, onEdit }) {
  const dispatch = useDispatch();
  const genres = useSelector(state => state.genres);
  const [props, setProps] = useState({
    nameGame: dbGame.nameGame,
    cost: dbGame.cost,
    description: dbGame.description,
    namesGenders: []
  });
  const [errors, setErrors] = useState({});

  const handleImgChange = (event) => {
    setProps({
      ...props,
      image: event.target.files[0]
    });
  }

  const handleChange = (event) => {
    if (event.target.name === "namesGenders") {
      let aux = event.target.value;
      if (aux.length > 0) {
        if (!props.namesGenders.includes(aux)) {
          setProps({
            ...props,
            namesGenders: [...props.namesGenders, aux],
          });
        } else {
          const arr = props.namesGenders.filter((index) => index !== aux);
          setProps({
            ...props,
            namesGenders: arr,
          });
          setErrors(validateAdmin({ ...props, namesGenders: arr }));
        }
      }
    } else {
      setProps({
        ...props,
        [event.target.name]: event.target.value,
      });
      setErrors(
        validateAdmin({
          ...props,
          [event.target.name]: event.target.value,
        })
      );
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(putGame(dbGame.idGame, props));
    onEdit();
  };

  return (
    <aside className={style.edit}>
      <div className={style.contain}>
        <div className={style.head}>
          <button type="button" onClick={onEdit}>✖</button>
          <h1>Edit Game</h1>
        </div>
        <form className={style.form} onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              name="nameGame"
              value={props.nameGame}
              onChange={handleChange}
            />
          </label>
          {errors.nameGame && <p>{errors.nameGame}</p>}
          <label>
            <textarea
              type="text"
              name="description"
              value={props.description}
              onChange={handleChange}
            ></textarea>
          </label>
          {errors.description && <p>{errors.description}</p>}
          <label htmlFor="image">
            <img src={dbGame.image} alt={props.nameGame} />
            <input
              type="file"
              name="image"
              onChange={handleImgChange}
            />
          </label>
          {errors.image && <p>{errors.image}</p>}
          <label>
            <ul>
              {
                dbGame.genders.map(gn => (
                  <li key={gn.idGenders}>{gn.nameGenders}</li>
                ))
              }
            </ul>
            <select name="namesGenders" onChange={handleChange}>
              <option></option>
              {genres?.map(gn => (
                <option
                  key={gn.idGenders}
                  value={gn.nameGenders}
                  onChange={handleChange}
                >
                  {gn.nameGenders}
                </option>
              ))}
            </select>
            <ul>
              {
                props.namesGenders.map(gn => (
                  <li key={gn}>{gn}</li>
                ))
              }
            </ul>
          </label>
          <label>
            <input
              type="text"
              name="cost"
              value={props.cost}
              onChange={handleChange}
            />
          </label>
          {errors.cost && <p>{errors.cost}</p>}
          <button>Submit</button>
        </form>
      </div>
    </aside>
  );
}