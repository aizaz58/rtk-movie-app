import React from 'react'
import './App.scss';
import {Route,Routes} from 'react-router-dom'
import Home from './components/home/Home';

import MovieDetails from './components/MovieDetails/MovieDetails';
import PageNotFound from './components/pagenotfound/PageNotFound';

import LayOut from './LayOut';

function App() {
  return (
  
    <Routes>
      
    <Route path='/'element={<LayOut/>}>
        <Route index element={<Home/>}/>
        <Route path='/movie/:imdbId'element={<MovieDetails/>}/>
        
        <Route path="*" element={<PageNotFound/>}/>
        

       
        </Route>
      </Routes>
    
  );
}

export default App;
