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
    <aside>
      <div>
        <h1>Edit Game</h1>
        <form onSubmit={handleSubmit}>
          <button type="button" onClick={onEdit}>✖</button>
          <input
            type="text"
            name="nameGame"
            value={props.nameGame}
            onChange={handleChange}
          />
          {errors.nameGame && <p>{errors.nameGame}</p>}
          <br />
          <br />
          <textarea
            type="text"
            name="description"
            value={props.description}
            onChange={handleChange}
          ></textarea>
          {errors.description && <p>{errors.description}</p>}
          <br />
          <br />
          <label htmlFor="image">
            <img src={dbGame.image} alt={props.nameGame} />
          </label>
          <input
            type="file"
            name="image"
            onChange={handleImgChange}
          />
          {errors.image && <p>{errors.image}</p>}
          <br />
          <br />
          <label>
            {
              dbGame.genders.map(gn => (
                <span key={gn.idGenders}>{gn.nameGenders}</span>
              ))
            }
          </label>
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
          <br />
          <br />
          <input
            type="text"
            name="cost"
            value={props.cost}
            onChange={handleChange}
          />
          {errors.cost && <p>{errors.cost}</p>}
          <br />
          <br />
          <button>Submit</button>
        </form>
      </div>
    </aside>
  );
}