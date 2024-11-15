import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {UserAuth} from '../AutoContext';
import bannerimage from '../../images/Home/ET-en-20240212-popsignuptwoweeks-perspective_alpha_website_small.jpg'
const Login = () => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [error, setError] =useState('')
 const  {user, logIn}  = UserAuth();
 const Navigate=useNavigate();

 const handleEvent = async (e) => {
   e.preventDefault();
   setError('')
   try {
     await logIn(email, password);
     Navigate('/')
   } catch (error) {
    setError(error.message);
     console.log(error);
   }
 };
  return (
    <>
     <div className='w-full h-screen '>
        <img src={bannerimage} alt='bannerImage' className='w-full h-full object-cover absolute hidden sm:block '/>
        <div className='w-full h-screen fixed bg-black/60 right-0 top-0'>
            <div className='w-full px-4 py-24 z-50 fixed'>
                <div className='max-w-[450px] h-[600px] mx-auto text-white bg-black/75'>
                    <div className='max-w-[320px] mx-auto py-16'>
                        <h1 className='font-bold sm:text-3xl text-white items-center text-center'>Log In</h1>
                 {error ?<p className='p-3 m-2 bg-red-600'>{error}</p> : null}
                    <form className=' flex  flex-col py-6' onSubmit={handleEvent}>
                        <input onChange={(e) => setEmail(e.target.value)} className='my-3 py-2 bg-gray-600 rounded' type='Email' placeholder='Email' autoComplete='Email'/>
                        <input onChange={(e) => setPassword(e.target.value)} className='my-3 py-2 bg-gray-600 rounded' type='password' placeholder='password' autoComplete='current_password'/>
                        <button className='bg-red-600 font-bold  w-full my-6 py-3 rounded-full'>Log in</button>
                        <div className='flex justify-between items-center text-sm text-gray-600'>
                        <p><input type='checkbox' className='mr-2'/> Remember me</p>
                              <p>Need help?</p>

                        </div>
                        <div className=' flex py-3 justify-between'>
                        <p className=''><span className='text-gray-600 '>new to netflex?</span>
                        </p>
                        <p><Link to='/signup/'>Sign UP</Link></p>
                        </div>
                    </form>
                    </div>
                </div>
        </div>
        </div>
        </div>
     
    </>
  );
}

 export default Login;

// // import { initializeApp } from "firebase/app";
// // import {firebaseConfig } from "../Firebase/Firebase"
// import{getAuth, signInWithEmailAndPassword} from 'firebase/auth';

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// // import { useAuth } from '../AutoContext';
// import bannerimage from '../../images/Home/ET-en-20240212-popsignuptwoweeks-perspective_alpha_website_small.jpg';

// const Login = () => {
//   // const app= initializeApp(firebaseConfig);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   // const auth= getAuth();
//   const [isuserexist, setuserexists]=useState(false);
//   // console.log(auth);
//   const navigate = useNavigate();

//   const handleEvent = async (e) => {
//     e.preventDefault();
//     // signInWithEmailAndPassword(auth, email, password)
//     // .then(=>{
//     //   if(){
//     //     navigate('/');
//     //   }
      
//     // }
//     // )
//     // .catch (error=>setuserexists(true)) 
      
//   }
//     // try {
//     //   await login(email, password);
//     //   navigate('/');
     
  

//   return (
//     <>
//       <div className="w-full h-screen">
//         <img src={bannerimage} alt="bannerImage" className="w-full h-full object-cover absolute hidden sm:block" />
//         <div className="w-full h-screen fixed bg-black/60 right-0 top-0">
//           <div className="w-full px-4 py-24 z-50 fixed">
//             <div className="max-w-[450px] h-[600px] mx-auto text-white bg-black/75">
//               <div className="max-w-[320px] mx-auto py-16">
//                 <h1 className="font-bold sm:text-3xl text-white items-center text-center">Log In</h1>
//                 <form className="flex flex-col py-6" onSubmit={handleEvent}>
//                   <input
                  
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="my-3 py-2 bg-gray-600 rounded"
//                     type="email"
//                     placeholder="Email"
//                     autoComplete="email"
//                   />
//                   <input
//                     onChange={(e) => setPassword(e.target.value)}
//                     className="my-3 py-2 bg-gray-600 rounded"
//                     type="password"
//                     placeholder="Password"
//                     autoComplete="current-password"
//                   />
//                   <button className="bg-red-600 font-bold w-full my-6 py-3 rounded-full" type="submit">
//                     Log in
//                   </button>
//                   <div className="flex justify-between items-center text-sm text-gray-600">
//                     <p>
//                       <input type="checkbox" className="mr-2" /> Remember me
//                     </p>
//                     <p>Need help?</p>
//                   </div>
//                   <div className="flex py-3 justify-between">
//                    { isuserexist &&<p className="text-red-600">user doesn't exist |go for signup</p>}
//                     <p>
//                       <span className="text-gray-600">New to Netflix?</span>
//                     </p>
//                     <p>
//                       <Link to="/signup/">Sign Up</Link>
//                     </p>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Login;