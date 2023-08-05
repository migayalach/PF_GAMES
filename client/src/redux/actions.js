import axios from 'axios'
import {GET_GAMES} from "./action-type"

export const getGames = () => {
    return async function (dispatch) {
        try {
            const { data } = await axios.get('/games')
            dispatch({ type: GET_GAMES, payload: data })
        } catch (error) {
            console.log(error)
        }
    }
}; 

export function getById(id){
    return async function(dispatch){
        const responce = await axios(`http://localhost:3001/games/${id}`);
        return dispatch ({
            type: "GET_BY_ID",
            payload: responce.data
        })
    };
}