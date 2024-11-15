import React, { useEffect, useState } from 'react';
import Request from '../../Request';
import axios from 'axios';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

const MoviesBanner = () => {
    const [movies, setmovies]= useState([]);
    const [trailer,settrailer]=useState('');
    const movie= movies[Math.floor(Math.random()*movies.length)];

    useEffect(()=>{
      axios.get(Request.requestMovies)
      .then((response)=>{
        setmovies(response.data.results);
      })


    },[])

    const collapsestring= (string, number)=>{
      if(string?.length>number){
        return  string.slice(0,number) + "...";
      }
      else{
        return string;
      }
    }
    console.log(movies);
    const handleclick=(items)=>{
      if(trailer){
        settrailer('');
      }
      else{
        movieTrailer(items?.title || items?.name ||items?.orginalname)
        .then((url)=>{
          console.log(url);
          const urlparms= new URLSearchParams(new URL(url).search);
          console.log(urlparms);
          console.log(urlparms.get('v'));
          settrailer(urlparms.get('v'))
        })
      }
    }
    const opts = {
      height: '600',
      width: '100%',
      playerVars: {
       autoplay:1,
      }
    }

  return (
    <>
      <div className='w-full h-[850px]  top-0 left-0' >
      <div className=' w-full  ' style={{padding:'' }}>{trailer && <YouTube videoId={trailer} opts={opts}/>}</div>
    <div className='w-full h-full bg-gradient-to-r from-black  '>  <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} className='' alt={movie?.title}/></div>
      
      <div className='absolute top-[20%] h-[550] w-full '>
      <p className=' px-10 py-0 text-white font-bold  text-2xl md:text-5xl sm:hidden'>{movie?.title}</p>
      <button className='bg-emerald-950 text-black-300  m-10 px-6 py-3 rounded' onClick={() => handleclick(movie)} > play</button>
      <button className='px-6 py-3 rounde bg-amber-100'>watch Later</button>
      <div className='px-10 py-0 text-inherit font-bold  text-3xl opacity-30'><p>Relase date: {movie?.release_date}</p></div>
      <p className='w-full text-gray-200 md:max-w-[70%] lg:max-w-[50%] text-center xl-max-w-[35%] ml-10'>{collapsestring(movie?.overview, 221)}</p>
      </div>
    </div>
    </>
  );
}

export default MoviesBanner;
