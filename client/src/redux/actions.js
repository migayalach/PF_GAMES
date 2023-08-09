import axios from "axios";
import { newObj } from "../utils/actionClear";
import {
  GET_GAMES,
  GET_GAME_BY_NAME,
  GET_GENDERS,
  GET_BY_ID,
  GET_FILTER,
  FILTERS_ACTIVE,
  ORDER_NAME,
  ORDER_COST,
  POST_GAME,
  DELETE_ITEM,
  DELETE_PRODUCTS,
  ADD_PRODUCTS,
  COUNT_TOTAL,
  POST_CHECKOUT_ID,
  POST_COMPRA_USER,
  GET_COMPRAS_USER
} from "./action-type";
import Swal from "sweetalert2";

export const postGame = (game) => {
  console.log(game);
  return async function (dispatch) {
    const obj = newObj(game);
    try {
      const createGame = await axios.post(
        `http://localhost:3001/gaming/games`,
        obj
      );
      const newGames = createGame.data;
      dispatch({
        type: POST_GAME,
        payload: newGames,
      });
    } catch (error) {
      alert("No se pudo crear");
    }
  };
};

export const getGames = () => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get("/games");
      dispatch({ type: GET_GAMES, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getGameByName = (payload) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`/games?name=${payload}`);
      dispatch({ type: GET_GAME_BY_NAME, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getGenders = () => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get("/genders");
      dispatch({ type: GET_GENDERS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};

export function getById(id) {
  return async function (dispatch) {
    const responce = await axios(`/games/${id}`);
    return dispatch({
      type: GET_BY_ID,
      payload: responce.data,
    });
  };
}

export function getFilter(gender = "", min = 0, max = 0) {
  return async function (dispatch) {
    const response =
      gender && min && max
        ? await axios(
          `/filters?gender=${gender}&minPrice=${min}&maxPrice=${max}`
        )
        : gender && !min && !max
          ? await axios(`/filters?gender=${gender}`)
          : await axios(`/filters?minPrice=${min}&maxPrice=${max}`);
    return dispatch({
      type: GET_FILTER,
      payload: response.data,
    });
  };
}

export function filtersActive() {
  return { type: FILTERS_ACTIVE };
}

export function orderByName(orden) {
  return {
    type: ORDER_NAME,
    payload: orden,
  };
}

export function orderByCost(orden) {
  return {
    type: ORDER_COST,
    payload: orden,
  };
}

export const addProducts = (payload) => {
  return {
    type: ADD_PRODUCTS,
    payload
  }
}



export const deleteItem = (payload) => {
  return {
    type: DELETE_ITEM,
    payload
  }
}

export const deleteProducts = () => {
  return {
    type: DELETE_PRODUCTS,
  }
}

export const countTotal = (payload) => {
  return {
    type: COUNT_TOTAL,
    payload
  }
}

export const postCheckoutId = (payload) => async (dispatch) => {
  try {
    const { data } = await axios.post("/compras", payload)
    Swal.fire({
      title: 'COMPRADO!',
      text: 'Su compra fue éxitosa',
      icon: 'success',
      confirmButtonText: 'entendido'
    })
    return dispatch({
      type: POST_CHECKOUT_ID,
      payload: data
    })
  } catch (error) {
    Swal.fire({
      title: 'ERROR AL COMPRAR!',
      text: error.response.data.message,
      icon: 'error',
      confirmButtonText: 'entendido'
    })
  }
}

export const postCompraUser = (payload) => async (dispatch) => {
  try {
    const { data } = await axios.post("/Compras/Comprar", payload)
    return dispatch({
      type: POST_COMPRA_USER,
      payload: data,
    });
  } catch (error) {
    console.log("Desde postCompraUser", error);
    Swal.fire({
      title: 'ERROR AL REGISTRAR COMPRA!',
      text: error.response.data.message,
      icon: 'error',
      confirmButtonText: 'entendido'
    })
  }
}

export const getComprasUser = (payload) => async (dispatch) => {
  try {
    const { data } = await axios(`/Compras?idUser=${payload}`)
    return dispatch({
      type: GET_COMPRAS_USER,
      payload: data
    });
  } catch (error) {
    console.log("Desde getCompraUser", error);
    Swal.fire({
      title: 'No se encontraron compras para este usuario',
      text: "Este usuario no registra compras",
      icon: "info",
      confirmButtonText: 'entendido'
    })
  }
}


