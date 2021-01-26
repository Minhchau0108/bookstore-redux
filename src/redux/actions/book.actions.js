import * as types from '../constants/book.constants';
import api from "../../apiService";
import {toast } from 'react-toastify';

const bookActions = {
    getBooks: (pageNum, limit, query) => async(dispatch) =>{
        dispatch({type: types.GET_BOOKS_REQUEST});
        try{
            let url = `/books?_page=${pageNum}&_limit=${limit}`;
            if(query) url += `&q=${query}`
            const data = await api.get(url);
            dispatch({type: types.GET_BOOKS_SUCCESS, payload: data.data})
        }
        catch(error){
            toast.error(error.message);
            dispatch({type: types.GET_BOOKS_FAILURE, payload: error})
        }
    },
    getReadingBooks: ()=>async(dispatch) =>{
        dispatch({type: types.GET_READING_BOOKS_REQUEST});
        try{
            let url = `/favorites`;
            const data = await api.get(url);
            dispatch({type: types.GET_READING_BOOKS_SUCCESS, payload: data.data})
        }
        catch(error){
            toast.error(error.message);
            dispatch({type: types.GET_SINGLE_BOOK_FAILURE, payload: error})
        }
    },
    getSingleBook: (id)=> async(dispatch) =>{
        dispatch({type: types.GET_SINGLE_BOOK_REQUEST});
        try{
            let url = `/books/${id}`;
            const data = await api.get(url);
            dispatch({type: types.GET_SINGLE_BOOK_SUCCESS, payload: data.data})
        }
        catch(error){
            toast.error(error.message);
            dispatch({type: types.GET_SINGLE_BOOK_FAILURE, payload: error})
        }
    },
    addToFavorites: (book) => async() =>{
        try{
            await api.post(`/favorites`, book);
            toast.success("The book has been added to favorites");
        }
        catch(error){
            toast.error(error.message);
        }
    },
    deleteFavorite: (removedBookId) => async()=>{
        try{
            await api.delete(`/favorites/${removedBookId}`);
            toast.success("The book has been removed");
        }
        catch(error){
            toast(error.message);
        }
    }
}
export default bookActions;