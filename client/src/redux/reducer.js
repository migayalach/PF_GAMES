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
  COUNT_TOTAL,
  GAMES_BY_GENRE,
  POST_CHECKOUT_ID,
  POST_COMPRA_USER,
  GET_COMPRAS_USER,
  CHECK_USER,
  GET_LEVEL_USER,
  APROBAR_PAGO,
  GET_USERS,
  AGREGADO_A_CARRITO,
} from "./action-type";

const initialState = {
  user: {},
  users: [],
  game: {},
  games: [],
  filtersActive: false, // Para mostrar los filtros
  genres: [],
  gamesByGenres: {},
  addedgame: {},
  currentPage: 1,
  error: {},
  cart: [],
  cartTotal: 0,
  order: {},
  orders: [],
  reviews: [],
  pagos: [],
  comprasUser: [],
  aprobado: false,
  agregado: false,
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_GAME:
      return {
        ...state,
        games: payload,
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
    case GAMES_BY_GENRE:
      return {
        ...state,
        gamesByGenres: {
          ...state.gamesByGenres,
          [payload.name.toLowerCase()]: payload.list,
        },
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
      return {
        ...state,
        cart: [...state.cart, payload],
      };
    case COUNT_TOTAL:
      return {
        ...state,
        cartTotal: payload,
      };
    case DELETE_ITEM:
      const index = state.cart.findIndex(
        (producto) => producto.idGame === payload.idGame
      );
      if (index !== 1) {
        const newCart = [...state.cart];
        newCart.splice(index, 1);
        return {
          ...state,
          cart: newCart,
        };
      }
      break
    case DELETE_PRODUCTS:
      return {
        ...state,
        cart: [],
      };
    case POST_CHECKOUT_ID:
      return {
        ...state,
        pagos: payload,
      };
    case POST_COMPRA_USER:
      return {
        ...state,
        pagos: payload,
      };
    case GET_COMPRAS_USER:
      return {
        ...state,
        comprasUser: payload,
      };
    case CHECK_USER:
      return { ...state, user: payload };
    case GET_LEVEL_USER:
      return {
        ...state,
        levelUser: payload,
      };
    case APROBAR_PAGO:
      return {
        ...state,
        aprobado: payload,
      }
    case GET_USERS:
      return {
        ...state,
        users: payload,
      }
    case AGREGADO_A_CARRITO:
      return{
        ...state,
        agregado: payload,
      }
    default:
      return state;
  }
};

export default rootReducer;
