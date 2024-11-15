import React, { useState } from 'react';
import './Header.css';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import PermContactCalendarRoundedIcon from '@mui/icons-material/PermContactCalendarRounded';
import netflixlogo from '../../images/icons/Netflix_Logo_PMS (3) copy.png';
import { Link, Navigate, useNavigate} from 'react-router-dom';
import { UserAuth } from '../AutoContext';

const Header = () => {
  const{user, logOut}= UserAuth();
  const Navigate= useNavigate()
  const handleclick = async (e) => {
   
   
    try {
      await logOut()
      Navigate('/signup')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex items-center justify-between flex-wrap bg-black/100 p-6' >
      <div className='flex header w-full items-center justify-between   z-[100]'>
       <div className='md:flex  justify-between items-center  text-2xl text-gray-400'>
       <Link to='/' className='sm:block md:inline-block'><div className=' font-bold text-gray-600 px-4 py-2  text-5xl mr-4 cursor-pointer' ><img src={netflixlogo} className='w-40' alt='netflex logo'/>  </div></Link>
            <Link to='/movies/' className='sm:block md:inline-block'><div className='  mr-6'>movies</div></Link>
            <Link to='/tvshows/' className='sm:block md:inline-block'><div className='mr-6'>Tvshows</div></Link>
            <Link to='/latest/' className='sm:block md:inline-block'><div className=' mr-6'>latest</div></Link>
           <Link to='mylist' className='sm:block md:inline-block'> <div className=' mr-6'>mylist</div></Link>
            <Link to='/languages/' className='sm:block md:inline-block'><div className=' mr-6'>Browse by languages</div></Link>
       </div>
       
        <div className='flex text-white'>
        <Link to='/search/'><div className=' text-sm mr-2 py-2  text-blue-400'><SearchRoundedIcon/></div></Link>
      <Link to='/notifcation/'><div className=' text-sm mr-2 text-blue-500 py-2'><NotificationsNoneRoundedIcon/></div></Link>
      <div className=' text-sm mr-2 py-2 text-blue-600'>< PermContactCalendarRoundedIcon/></div>
      {user?.email ?(
        <>
        <Link to='/Account/' > <div> <button className=' text-sm px-6 py-2 mr-4 bg-blue-400 rounded-full cursor-pointer'>Account</button></div></Link>
        <div><Link to='/signup/' >
          <button onClick={handleclick} className='text-sm px-6 py-2 mr-4 rounded-full border-red-700 bg-red-400 cursor-pointer'>Logout</button></Link></div>
        
        </>
      ):(
        <>
        <Link to='/login/' > <div> <button className=' text-sm px-6 py-2 mr-4 bg-blue-400 rounded-full cursor-pointer'>Sign In</button></div></Link>
        <div><Link to='/signup/'><button className='text-sm px-6 py-2 mr-4 rounded-full border-red-700 bg-red-400 cursor-pointer'>SignUp</button></Link></div>
        </>
      )
      }
        </div>
       
       
      </div>
    </div>
  );
}

export default Header;
