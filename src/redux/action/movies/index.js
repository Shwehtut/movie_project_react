/* eslint-disable no-unused-vars */
import { type } from "@testing-library/user-event/dist/type"
import {ActionType} from '../Action-type'

export const fetchMovies = (movies) => {
    return {
        type : ActionType.FETCH_MOVIES,
        payload : movies
    }
}
export const selectedMovie = (movie) => {
    return {
        type:  ActionType.SELECT_MOVIE ,
        payload : movie
    }
}
export const removeSelectedMovie = (movie) => {
    return {
        type:  ActionType.REMOVE_SELECTED_MOVIES ,
        payload : movie
    }
}