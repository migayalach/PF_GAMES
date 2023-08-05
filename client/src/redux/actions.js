import axios from 'axios'
import {GET_GAMES, GET_GAME_BY_NAME} from "./action-type"

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


export const getGameByName = (payload) => {
    return async function (dispatch) {
        try {
            const { data } = await axios.get(`/games?name=${payload}`)
            dispatch({ type: GET_GAME_BY_NAME, payload: data })
        } catch (error) {
            console.log(error)
        }
    }
}; 