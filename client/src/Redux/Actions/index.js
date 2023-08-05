import axios from "axios"

export const GET_BY_ID = "GET_BY_ID"
export const GET_GAMES = "GET_GAMES"
export const GET_COPY = "GET_COPY"



export function getGames(){
    return async function(dispatch){
        const responce = await axios("http://localhost:3001/gaming/games");
        return dispatch ({
            type: "GET_GAMES",
            payload:responce.data
        })
        
    };
}

export function getById(id){
    return async function(dispatch){
        const responce = await axios(`http://localhost:3001/gaming/games/${id}`);
        return dispatch ({
            type: "GET_BY_ID",
            payload: responce.data
        })
    };
}

export function getCopy(){
    return async function(dispatch){
        const responce = await axios("http://localhost:3001/gaming/games");
        return dispatch ({
            type: "GET_COPY",
            payload:responce.data
        })
    };
}