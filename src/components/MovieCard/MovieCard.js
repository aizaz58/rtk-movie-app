import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import './movieCard.scss'
import MovieCardStyles from './MovieCard-styles';
const MovieCard = ({ data }) => {
  
  const classes=MovieCardStyles();
  return (
    <Card  sx={{ maxWidth: 345 ,minWidth:340}}>
   
    <Link to ={`/movie/${data.imdbID}`}>
    <CardActionArea className={classes.trans} >
      <CardMedia
        component="img"
        height="400px"
        image={data.Poster}
        alt={data.Title}
      />
      <CardContent >
        <Typography  color="text.secondary" variant="h5" component="div">
          {data.Title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {data.Year}</Typography>
      </CardContent>
    </CardActionArea>
    </Link>
  </Card>
        )
}

        export default MovieCard