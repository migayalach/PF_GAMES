import {
  GET_GAMES,
  GET_BY_ID,
  GET_GENDERS,
  GET_GAME_BY_NAME,
  GET_FILTER,
  FILTERS_ACTIVE,
  ORDER_NAME,
  ORDER_COST,
  POST_GAME,
  DELETE_ITEM,
  DELETE_PRODUCTS,
  ADD_PRODUCTS,
  COUNT_TOTAL
} from "./action-type";

const initialState = {
  users: [],
  game: {},
  games: [],
  filtersActive: false, // Para mostrar los filtros
  genres: [],
  searched: [],
  addedgame: {},
  currentPage: 1,
  error: {},
  cart: [],
  cartTotal: 0,
  order: {},
  orders: [],
  reviews: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  console.log("DESDE REDUCER: ", payload);
  switch (type) {
    case POST_GAME:
      return {
        ...state,
        games: [...state.games, payload],
      };

    case GET_GAMES:
      return {
        ...state,
        games: payload,
      };
    case GET_GAME_BY_NAME:
      return {
        ...state,
        games: payload,
      };
    case GET_GENDERS:
      return {
        ...state,
        genres: payload,
      };
    case GET_BY_ID:
      return {
        ...state,
        game: payload,
      };
    case GET_FILTER:
      return {
        ...state,
        games: payload,
      };
    case FILTERS_ACTIVE:
      return {
        ...state,
        filtersActive: !state.filtersActive,
      };
    case ORDER_NAME:
      return {
        ...state,
        games: state.games.sort((a, b) => {
          if (payload === "ASC") return a.nameGame.localeCompare(b.nameGame);
          if (payload === "DES") return b.nameGame.localeCompare(a.nameGame);
          return 0;
        }),
      };
    case ORDER_COST:
      return {
        ...state,
        games: state.games.sort((a, b) => {
          if (payload === "ASC") return a.cost - b.cost;
          if (payload === "DES") return b.cost - a.cost;
          return 0;
        }),
      };
    case ADD_PRODUCTS:
      return{
        ...state,
        cart: [...state.cart ,payload]
      }
    case COUNT_TOTAL:
      return{
        ...state,
        cartTotal: payload
      }
    case DELETE_ITEM:
      const index = state.cart.findIndex((producto) => producto.idGame === payload.idGame);
      if (index !== 1) {
        const newCart = [...state.cart];
        newCart.splice(index, 1);
        return {
          ...state,
          cart: newCart
        };
      }
    case DELETE_PRODUCTS:
      return {
        ...state,
        cart : []
      }
    default:
      return state;
  }
};

export default rootReducer;
