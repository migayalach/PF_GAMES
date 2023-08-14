import axios from "axios";
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
  GAMES_BY_GENRE,
  POST_CHECKOUT_ID,
  POST_COMPRA_USER,
  GET_COMPRAS_USER,
  CHECK_USER,
  GET_LEVEL_USER,
  APROBAR_PAGO,
  GET_USERS,
  AGREGADO_A_CARRITO
} from "./action-type";
import Swal from "sweetalert2";

const apiKeyIBB = process.env.REACT_APP_API_KEY_IBB;

export const postGame = (game) => {
  const formData = new FormData();
  formData.append("image", game.imagen);
  return async function (dispatch) {
    try {
      const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${apiKeyIBB}`, formData);
      const obj = {
        namesGenders: game.genero,
        nameGame: game.nombre,
        image: data.data.url,
        cost: game.costo,
        description: game.descripcion
      }
      const createGame = await axios.post(
        "/games",
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

export function gamesByGenders(genre) {
  return async function (dispatch) {
    const response = await axios(`/filters?gender=${genre}`);
    const listGamesImages = response.data.map(gm => gm.image);
    return dispatch({
      type: GAMES_BY_GENRE,
      payload: { name: genre, list: listGamesImages }
    });
  }
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
  }
}

export const checkUser = (nameUser, email) => {
  return async function (dispatch) {
    try {
      const data = (
        await axios.get(`/user?nameUser=${nameUser}&email=${email}`)
      ).data;
      dispatch({ type: CHECK_USER, payload: data });
    } catch (error) {
      console.log("hay error");
    }
  };
};

export const getLevelUser = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/level");
    return dispatch(
      {
        type: GET_LEVEL_USER,
        payload: data
      });
  } catch (error) {
     console.log('ERROR AL TRAER NIVELES DE USUARIO!',error.message) 
  }
};


export const aprobarPago = () => {
  return {
    type: APROBAR_PAGO,
    payload: true,
  }
}


export const obtenerUsers = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/user");
    return dispatch(
      {
        type: GET_USERS,
        payload: data
      });
  } catch (error) {
    console.log('ERROR AL OBTENER USUARIOS!', error.message) 
  }
};

export const agregadoACarrito = (payload) => {
  return {
    type: AGREGADO_A_CARRITO,
    payload,
  }
}