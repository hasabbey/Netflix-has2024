import axios from 'axios';
import Request from '../../Request';
import React, { useEffect, useState } from 'react';
import {FaHeart, FaRegHeart} from 'react-icons/fa';
import $ from "jquery";
import TvshowsBanner from './TvshowsBanner';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

// import {Mdchvernright, Mdchvernleft} from '@mui/icons-material';


const Tvshows = ({title, FETCHURL}) => {
    const [moviest, setmoviest]= useState([]);
    const [like, setlike]=useState(false);
    const [trailer, settrailer]= useState('');
    useEffect(()=>{
        axios.get(Request.requestTVshows)
        .then((res) => {
      setmoviest(res.data.results);
        })
          
          // setmovies(json.results);
        
        .catch(err => console.error('error:' + err));
      }, [FETCHURL])
      console.log(moviest);
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

      let scrollLeft= ()=>{
        let slider= $('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
      }
      let scrollright= ()=>{
        let slider= $('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
      }

  return (
    <>
    <TvshowsBanner/>
 
      <h1 className='text-blue-200  md:text-2xl p-5 pt-10'>{title}</h1>
      <div className=' flex item-center group mx-20'>
        {/* <div className=''><Mdchvernleft className='text-white rounded-full bg-blue-400 p-4'/> */}
        
        <div id ={'slider'} className='w-full h-full'>
        <div className=' w-full  ' style={{padding:'' }}>{trailer && <YouTube videoId={trailer} opts={opts}/>}</div>
        
            {moviest.map((items, id)=>(
<div className='w-[400px] sm:w-[400px] md:w-[400px] lg:w-[300px] md:inline-block xsm: block cursor-pointer transition-transform    p-2 mx-auto '>
<img  src={`https://image.tmdb.org/t/p/w500/${items?.backdrop_path}`} className='w-full h-auto hover:scale-110 block' alt={items?.title} onClick={() => handleclick(items)}/>

<div className='w-full absolute top-5 left-0 text-white opacity-0 hover:opacity-100 font-bold'>
<p className='h-full text-sm items-center flex justify-center'>{items?.title}</p>
<p>
{like ? <FaHeart   className='text-red-600 font-bold left-8 top-4 '/>: <FaRegHeart  className='text-red-600 font-bold  top-8 '/>}
</p>
</div>
      
</div>
            ))}



        </div>
        {/* <Mdchvernright className="h-5 w-5 text-blue-500 right-0 " /> */}
        {/* </div> */}
       
      </div>
    </>
  );
}


export default Tvshows;
