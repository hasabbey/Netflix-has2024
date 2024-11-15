import React from 'react'
import Homelist from '../HomeList/HomeList';
import Request from '../../../src/Request';


const Home = () => {
  return (
   <>
  
  <Homelist title='popular'  FETCHURL={Request.requestpopular}/>
   <Homelist title='nowplaying'  FETCHURL={Request.requestnowplaying}/>
   <Homelist title='TopRated'  FETCHURL={Request.requstedTopRated}/>
   <Homelist title='upComing'  FETCHURL={Request.requestupComing}/>
   <Homelist title='nowpopular'  FETCHURL={Request.requestnowpopular}/>
   <Homelist title='Movies'  FETCHURL={Request.requestMovies}/>
  </>
  
  )
}

export default Home
