import { GET_GAMES, GET_BY_ID, GET_GENDERS} from "./action-type";

const initialState = {
    users: [],
    game: {},
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
        case GET_GENDERS:
            return {
                ...state,
                genres: payload
            }
        case GET_BY_ID:
            return {
                ...state,
                game: payload,
            };
        default: 
            return state;
    }
};

export default rootReducer; 
