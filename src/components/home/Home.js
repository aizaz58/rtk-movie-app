import React, { useEffect } from 'react'
import MovieApi from '../../common/APIS/MovieApi'

import MovieListing from '../movielisting/MovieListing'
import {useDispatch} from 'react-redux'
import { fetchMovies, fetchShows } from '../../features/movies/movieSlice'
const Home = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
   dispatch(fetchMovies())
   dispatch(fetchShows())
    
    },[dispatch])
  return (
    <div>
    <div className="img-banner"></div>
    <MovieListing/>
    </div>
  )
}

export default Home