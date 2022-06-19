import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice'
import MovieCard from '../MovieCard/MovieCard'
import './movieListing.scss'
import Slider from "react-slick";

const MovieListing = () => {
  const movies=useSelector(getAllMovies)
  const shows=useSelector(getAllShows)

  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  let renderMovies=''
  let renderShows=''

  renderMovies=movies.Response==='True'?(movies.Search.map((movie,index)=>(
      <MovieCard key={index} data={movie}></MovieCard>
  ))):(<div className='movies-error'><h3>{movies.Error}</h3></div>)

  renderShows=shows.Response==='True'?(shows.Search.map((show,index)=>(
    <MovieCard key={index} data={show}></MovieCard>
))):(<div className='movies-error'><h3>{movies.Error}</h3></div>)

  return (
    <div className="movie-wrapper">
    <div className="movie-list">
      <h2>Movies</h2>
      
      <div >
      <Slider {...settings}>
   {renderMovies}
</Slider> </div>
 
    </div>

    <div className="movie-list">
      <h2>Shows</h2>
      <div >
      <Slider{...settings}>{renderShows}
      </Slider></div>
    </div>
    

    </div>
  )
}

export default MovieListing