import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { filtersActive, orderByName, orderByCost, getFilter, getGames } from '../../redux/actions'
import style from './filters.module.css'

const initialFilter = {
  gender: "",
  minPrice: "",
  maxPrice: "",
  nameGame: "",
  cost: ""
}

const Filters = () => {
  const dispatch = useDispatch();
  const genders = useSelector(state => state.genres);
  const [filter, setFilter] = useState(initialFilter);
  const [error, setError] = useState(initialFilter);
  function validar(inputs) {
    const errors = {};
    if (!/^[0-9]+$/.test(inputs.minPrice)) errors.minPrice = "Solo acepta numeros"; 
    if (!/^[0-9]+$/.test(inputs.maxPrice)) errors.maxPrice = "Solo acepta numeros";
    if (+inputs.minPrice >= +inputs.maxPrice) errors.minPrice = "Debe ser menor al precio maximo";
    return errors; 
  }
  function filterChange(e) {
    e.preventDefault();
    setFilter({
      ...filter,
      [e.target.name]: e.target.value
    });
    setError(validar({
      ...filter,
      [e.target.name]: e.target.value
    }));
  }
  function filterSubmit(e) {
    e.preventDefault();
    if (filter.gender || filter.minPrice || filter.maxPrice) dispatch(getFilter(filter.gender, +filter.minPrice, +filter.maxPrice));
    if (filter.nameGame) dispatch(orderByName(filter.nameGame));
    if (filter.cost) dispatch(orderByCost(filter.cost));
    dispatch(filtersActive());
    setFilter(initialFilter);
    setError(initialFilter);
  }
  function reset() {
    dispatch(getGames());
    dispatch(filtersActive());
  }
  return (
    <aside className={style.filters}>
      <form onSubmit={filterSubmit} className={style.form}>
        <button type='button' onClick={() => dispatch(filtersActive())}>X</button>
        <label>
          <input list="gender" name='gender' placeholder='Filter by genre' onChange={filterChange} />
          <datalist id="gender">
            {
              genders?.map(gn => (
                <option key={gn.idGenders} value={gn.nameGenders}></option>
              ))
            }
          </datalist>
        </label>
        <label className={style.filtPrice}>
          <p>Filter by price</p>
          <div>
            <input type="number" name='minPrice' placeholder='min' onChange={filterChange} />
            <input type="number" name='maxPrice' placeholder='max' onChange={filterChange} />
          </div>
          <span>{error.minPrice}</span>
          <span>{error.maxPrice}</span>
        </label>
        <label>
          <select name="nameGame" onChange={filterChange} disabled={!filter.cost ? false : true}>
            <option value="" onFocus>Select order by name</option>
            <option value="ASC">Ascendente</option>
            <option value="DES">Descendente</option>
          </select>
        </label>
        <label>
          <select name="cost" onChange={filterChange} disabled={!filter.nameGame ? false : true}>
            <option value="" onFocus>Select order by cost</option>
            <option value="ASC">Ascendente</option>
            <option value="DES">Descendente</option>
          </select>
        </label>
        <div className={style.btns}>
          <button type='submit' disabled={!filter.gender && !filter.minPrice && !filter.maxPrice && !filter.nameGame && !filter.cost ? true : false}>Aplicar</button>
          <button type='button' onClick={reset}>Reset</button>
        </div>
      </form>
    </aside>
  );
}

export default Filters;