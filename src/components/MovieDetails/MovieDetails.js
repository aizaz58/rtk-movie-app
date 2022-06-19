import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchMovieDetails, getDetail, removeMovieOrShow } from '../../features/movies/movieSlice'

import './moviedetails.scss'

const MovieDetails = () => {
  const { imdbId } = useParams()
  const dispatch = useDispatch()
  const data = useSelector(getDetail)
  
  useEffect(() => {
    dispatch(fetchMovieDetails(imdbId))
    return(()=>{
      dispatch(removeMovieOrShow())
    })

  }, [imdbId, dispatch])

  return (
    Object.keys(data).length===0?(
      <div>loading....</div>
    ):(
    <div>
      <div className="movie-section">
        <div className="section-left">
          <div className="movie-title">{data.Title}</div>
          <div className="movie-rating">
            <span>imdb Rating <i className="fa fa-star"></i>:{data.imdbRating}</span>
            <span>imdb Votes <i className="fa fa-thumbs-up"></i>:{data.imdbVotes}</span>
            <span>Runtime <i className="fa fa-file"></i>:{data.Runtime}</span>
            <span>Year <i className="fa fa-calender"></i>:{data.Year}</span>

          </div>
          <div className="movie-plot">{data.Plot}</div>
          <div className="movie-info">
            <div>
              <span>Director</span>
              <span>{data.Director}</span>
            </div>
            <div>
              <span>Actors</span>
              <span>{data.Actors}</span>
            </div>
            <div>
              <span>Generes</span>
              <span>{data.Genre}</span>
            </div>
            <div>
              <span>Languages</span>
              <span>{data.Language}</span>
            </div>
            <div>
              <span>Awards</span>
              <span>{data.Awards}</span>
            </div>

          </div>

        </div>
        <div className="section-right">
        <img src={data.Poster} alt={data.Title}></img>

        </div>
      </div>
    </div>
  ))
}

export default MovieDetails