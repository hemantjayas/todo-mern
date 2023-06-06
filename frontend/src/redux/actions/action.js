import axios from "axios";
import { ADD_BOOKS, GET_BOOKS ,DELETE_BOOKS} from "./actionTypes";
const API_URL = "http://localhost:8000";


export const addnewBook = (data) => async (dispatch) => {
    try {
        const res = await axios.post(`${API_URL}/books`, data)

        dispatch({ type: ADD_BOOKS, payload: res.data })

    } catch (error) {
        console.log("error while adding a book", error.message)
    }
}

export const getAllBook = () => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/books`)

        dispatch({ type: GET_BOOKS, payload: res.data })

    } catch (error) {
        console.log("error while getting all books", error.message)
    }
}

export const deleteBook = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(`${API_URL}/books/${id}`)

        dispatch({ type: DELETE_BOOKS, payload: res.data })

    } catch (error) {
        console.log("error while getting all books", error.message)
    }
}


