import React from 'react'
import MylistHome from './MylistHome';
import Request from '../../Request';
import MylistBanner from './MylistBanner';



const Home = () => {
  return (
   <>
   <MylistBanner/>
  
  <MylistHome title='popular'  FETCHURL={Request.requestMovielist}/>

  
  </>
  
  )
}

export default Home
