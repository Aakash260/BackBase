import React,{useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const About = () => {
const [show, setShow] = useState(true)   
const [data, setData] = useState({})
const navigate=useNavigate()
const callAboutPage=async()=>{
  try {
    const res=await fetch('http://localhost:5174/about',{
      method:"GET",
      headers:{
        Accept:"application/json",//for cookie
        "Content-Type":"application/json"
      },
      credentials:"include"//for token
    })
    const data1=await res.json();
    setData(data1)
    
    if(!res.status===200){
      const error=new Error(res.error);
      throw error;
    }
  } catch (error) {
    console.log(error)
    navigate('/login')
  }
}


useEffect(() => {
callAboutPage()
}, [])
const {name,email,phone,work,_id}=data
  return (
    <div className='flex justify-center items-center h-[88vh]'> 
     <form action="GET">
       <div className=" grid grid-cols-4 border border-black w-[80vw] h-[60vh]">
        <div className="grid1 col-span-1 border border-black">
         <div className='grid'>
           <img className='p-4' src="https://media.wired.co.uk/photos/606da9f6e97d34ed515f0381/master/w_1600%2Cc_limit/GettyImages-693354896.jpg" alt="" />
           </div>
           <h4 className='text-gray-600'>WorkLink</h4>
           <ul>
        <li>Instagram</li>
        <li>LinkedIn</li>
        <li>YouTube</li>
           </ul>
        </div>
        <div className="grid2 col-span-3 border border-black">
       <div className="grid grid-rows-3 h-full">
       <div className="grid1 row-span-1 p-2 flex justify-between">
         <div>
           <h3 className='font-bold'>{name}</h3>
           <h4 className='text-blue-500'>WebDeveloper</h4>
           <h5>Ranking:1/10</h5>
         </div>
         <div>
           <h4 className='px-2 bg-slate-400 rounded-md'>Edit Profile</h4>
         </div>
       </div>
       <div className="grid1 row-span-2 ">
         <div className='flex px-2 gap-2 border-b border-0 border-black'>
       <NavLink>
         <h3 onClick={()=>setShow(true)} className={`${show && "text-blue-200"}`}>About</h3>
       </NavLink>
       <NavLink>
         <h3 onClick={()=>setShow(false)} className={`${!show && "text-blue-200"}`}>TimeLine</h3>
       </NavLink>
         </div>
         
        
        { show ?   <table border="1" className='flex flex-col items-center abouttable'>
          <tr className='w-full flex justify-between px-28'>
              <td>User_Id</td>
              <td>{_id}</td>
          </tr>
          <tr className='w-full flex justify-between px-28'>
              <td>Name</td>
              <td>{name}</td>
          </tr>
          <tr className='w-full flex justify-between px-28'>
              <td>Email</td>
              <td>{email}</td>
          </tr>
          <tr className='w-full flex justify-between px-28'>
              <td>Phone</td>
              <td>{phone}</td>
          </tr>
          <tr className='w-full flex justify-between px-28'>
              <td>Profession</td>
              <td>{work}</td>
          </tr>
          
           </table>:
        <table border="1" className='flex flex-col items-center abouttable'>
        <tr className='w-full flex justify-between px-28'>
            <td>Experience</td>
            <td>Expert</td>
        </tr>
        <tr className='w-full flex justify-between px-28'>
            <td>Hourly Rate</td>
            <td>105$/hr</td>
        </tr>
        <tr className='w-full flex justify-between px-28'>
            <td>Total Project</td>
            <td>230</td>
        </tr>
        <tr className='w-full flex justify-between px-28'>
            <td>English Level</td>
            <td>Expert</td>
        </tr>
        <tr className='w-full flex justify-between px-28'>
            <td>Availability</td>
            <td>6 Month</td>
        </tr>
        
         </table>
           }
        
       
       </div>
       </div>
        </div>
       </div>
     </form>
    </div>
  )
}

export default About