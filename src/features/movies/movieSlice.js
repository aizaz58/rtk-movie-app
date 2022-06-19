import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import { useDispatch } from "react-redux";
import { key } from '../../common/APIS/MovieApiKey'

const movieText='fast'
const showsText='friends'

export const fetchMovies=createAsyncThunk('movies/fetchMovies',async()=>{
    const response=await axios(`http://www.omdbapi.com/?s=${movieText}&apikey=${key}`)
    //http://www.omdbapi.com/?i=tt3896198&apikey=36b52d73
//const jj=response.json()
     return (response.data)
 
}) 

export const fetchShows=createAsyncThunk('shows/fetchShows',async()=>{
    const response=await axios(`http://www.omdbapi.com/?s=${showsText}&apikey=${key}`)
    //http://www.omdbapi.com/?i=tt3896198&apikey=36b52d73
//const jj=response.json()
     return (response.data)
 
})

export const fetchMovieDetails=createAsyncThunk('shows/fetchMovieDetails',async(id)=>{
    const response=await axios(`http://www.omdbapi.com/?i=${id}&Plot=full&apikey=${key}`)
    //http://www.omdbapi.com/?i=tt3896198&apikey=36b52d73
//const jj=response.json()
     return (response.data)
 
})



const movieSlice=createSlice({
    name:'movies',
    initialState:{
        movies:{},
        shows:{},
        movieDetail:{}
    },
    reducers:{
        addMovies:(state,action)=>{
            state.movies=action.payload
        }
    },
    removeMovieOrShow:(state)=>{
state.movieDetail={}
    },
    extraReducers:{
        [fetchMovies.pending]:()=>{
            console.log('pending')
        },
        [fetchMovies.fulfilled]:(state,{payload})=>{
            console.log('fullfilled')
            return{...state,movies:payload}
        },
        [fetchShows.fulfilled]:(state,{payload})=>{
            console.log('fullfilled')
            return{...state,shows:payload}
        },

        [fetchMovieDetails.fulfilled]:(state,{payload})=>{
            console.log('movieDetail fullfilled')
            return{...state,movieDetail:payload}
        },
        [fetchMovies.rejected]:()=>{
            console.log('rejected')
    
        }
    }
})

export const {addMovies,removeMovieOrShow}=movieSlice.actions;
export const getAllShows=(state)=>state.movies.shows
export const getAllMovies=(state)=>state.movies.movies
export const getDetail=(state)=>state.movies.movieDetail
export default movieSlice.reducer