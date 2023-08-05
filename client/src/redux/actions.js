import axios from 'axios'
import {GET_GAMES, GET_GAME_BY_NAME, GET_GENDERS} from "./action-type"


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

export const getGenders = () => {
    return async function (dispatch) {
        try {
            const { data } = await axios.get('/genders')
            dispatch({ type: GET_GENDERS, payload: data })
        } catch (error) {
            console.log(error);
        }
    }
}

export function getById(id){
    return async function(dispatch){
        const responce = await axios(`/games/${id}`);
        return dispatch ({
            type: "GET_BY_ID",
            payload: responce.data
        })
    };
}
