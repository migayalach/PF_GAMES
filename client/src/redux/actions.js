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
