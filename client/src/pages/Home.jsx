import React from 'react'
import { useLoginDetails } from '../context/Login_Details.jsx';
const Home = () => {
const {userdata}=useLoginDetails()
 
  return (
   <div className="">
    <div className="flex h-[88vh] relative">
      <div className="flex1 w-[50%] bg-gray-200  border-l-2 shadow-md">
       
      </div>
      <div className="flex2 w-[50%] border-l-2 shadow-md">
 
      </div>
<div className="absolute mt-52 text-center ml-[41vw]">
  <h3 className='text-blue-500 text-2xl font-bold'>Welcome</h3>
{userdata.email&&userdata.email.length!=0 &&<h3>You are logged in as <span className='text-blue-500 font-bold'> {userdata.email}</span></h3> }
  <h4>We are MERN Stack Developer</h4>
</div>
    </div>
   </div>
  )
}

export default Home