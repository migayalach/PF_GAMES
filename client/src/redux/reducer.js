import { GET_GAMES, GET_GAME_BY_NAME } from "./action-type";

const initialState = {
    users: [],
    games: [], 
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
    switch (type) {
        case GET_GAMES:
            return {
                ...state,
                games: payload,
            };
        case GET_GAME_BY_NAME:
            return{
                ...state,
                games: payload,
            }
        default: 
            return state;
    }
};

export default rootReducer; 
