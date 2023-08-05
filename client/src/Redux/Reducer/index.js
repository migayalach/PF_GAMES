import { GET_GAMES, GET_BY_ID, GET_COPY } from "../Actions";

let initialState = { allGames: [], getCopy: [],  }

function rootReducer(state = initialState, action) {

    switch (action.type) {

        case GET_COPY:
            return {
              ...state,
              getCopy: action.payload,
            };
        
        case GET_GAMES:
            return {
                ...state,
                allGames: action.payload,
                userCopy: action.payload
            };
        
        case GET_BY_ID:
            return {
                ...state,
                allGames: action.payload,
      };

      default:
        return state;
    }
    
}
export default rootReducer;