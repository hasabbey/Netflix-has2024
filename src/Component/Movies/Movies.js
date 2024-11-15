import React from 'react'
import MoviesHome from './MoviesHome';
import Request from '../../Request';
import MoviesBanner from './MoviesBanner';


const Home = () => {
  return (
   <>
   <MoviesBanner/>
  
  <MoviesHome title='popular'  FETCHURL={Request.requestpopular}/>
   <MoviesHome title='nowplaying'  FETCHURL={Request.requestnowplaying}/>
   <MoviesHome title='TopRated'  FETCHURL={Request.requstedTopRated}/>
   <MoviesHome title='upComing'  FETCHURL={Request.requestupComing}/>
  
  </>
  
  )
}

export default Home
