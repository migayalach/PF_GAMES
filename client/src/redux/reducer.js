import { GET_GAMES } from "./action-type";

const initialState = {
    games: [], 
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
