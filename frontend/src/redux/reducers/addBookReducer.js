import * as actionTypes from "../actions/actionTypes";


export const addBooksReducer = (state = [], action) => {

    switch (action.type) {

        case actionTypes.ADD_BOOKS:
            return [action.payload, ...state]

        case actionTypes.GET_BOOKS:
            return action.payload
        case actionTypes.DELETE_BOOKS:
            return state.filter((book) => book._id !== action.payload._id)


        default:
            return state
    }
}




