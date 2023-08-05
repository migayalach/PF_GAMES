import { GET_GAMES } from "./action-type";

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
        default: 
            return state;
    }
};

export default rootReducer; 
