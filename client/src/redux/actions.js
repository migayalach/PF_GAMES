import axios from 'axios'
import {GET_GAMES, GET_GAME_BY_NAME, GET_GENDERS, GET_BY_ID, GET_FILTER, FILTERS_ACTIVE, ORDER_NAME, ORDER_COST} from "./action-type"


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
            type: GET_BY_ID,
            payload: responce.data
        })
    };
}

export function getFilter(gender = "", min = 0, max = 0) {
    return async function(dispatch) {
        const response = gender && min && max
        ? await axios(`/filters?gender=${gender}&minPrice=${min}&maxPrice=${max}`)
        : gender && !min && !max
            ? await axios(`/filters?gender=${gender}`)
            : await axios(`/filters?minPrice=${min}&maxPrice=${max}`)
        return dispatch({
            type: GET_FILTER,
            payload: response.data
        })
    }
}

export function filtersActive() {
    return { type: FILTERS_ACTIVE };
}

export function orderByName(orden) {
    return {
        type: ORDER_NAME,
        payload: orden
    }
}

export function orderByCost(orden) {
    return {
        type: ORDER_COST,
        payload: orden
    }
}