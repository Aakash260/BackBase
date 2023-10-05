import React from 'react'
import { useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useLoginDetails } from '../context/Login_Details.jsx';
const Logout = () => {
    const navigate=useNavigate()
    const {addLoginDetails}=useLoginDetails()
   
useEffect(() => {
 fetch('http://localhost:5174/logout',{
    method:'GET',
    credentials: 'include',
    headers: {
        Accept:'application/json',
      'Content-Type': 'application/json'
    },
 }).then((res)=>{
   addLoginDetails("") 
    
  navigate('/')
  if(res.status!=200){
    const err=new Error(res.error)
    throw err
  }
 }).catch((err)=>{
    console.log(err)
 })
}, [])



  return (
    <div>Logout</div>
  )
}

export default Logout