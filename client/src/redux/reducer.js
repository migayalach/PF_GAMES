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
  PUT_GAME,
  DELETE_GAME,
  USER_IS_BAN,
  USER_IS_ADMIN,
  GET_RATING,
  POST_RATING,
  UPDATE_RATING,
  GET_COMPRAS
} from "./action-type";

const initialState = {
  user: {},
  adminGames: [],
  adminUsers: [],
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
  ratings: [],
  ventas: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_GAME:
      return {
        ...state,
        adminGames: payload,
        games: payload.filter(gm => gm.available === true),
      };
    case PUT_GAME:
      return {
        ...state,
        adminGames: payload,
        games: payload.filter(gm => gm.available === true),
      }
    case DELETE_GAME:
      return {
        ...state,
        adminGames: payload,
        games: payload.filter(gm => gm.available === true),
      }
    case GET_GAMES:
      return {
        ...state,
        adminGames: payload,
        games: payload.filter(gm => gm.available === true)
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
        adminUsers: payload,
      }
    case USER_IS_BAN:
      return {
        ...state,
        adminUsers: payload,
      }
    case USER_IS_ADMIN:
      return {
        ...state,
        adminUsers: payload,
      }
    case AGREGADO_A_CARRITO:
      return{
        ...state,
        agregado: payload,
      }
    case GET_RATING:
      return{
        ...state,
        ratings: payload,
      }
    case POST_RATING:
      return{
        ...state,
        ratings: [...state.ratings, payload],
      }
    case UPDATE_RATING:
      return{
        ...state,
        ratings: [...payload],
      }
    case GET_COMPRAS:
      return{
        ...state,
        ventas: payload
      }
    default:
      return state;
  }
};

export default rootReducer;
