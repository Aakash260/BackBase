import React, { useState } from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import { useLoginDetails } from '../context/Login_Details.jsx';
 
function Login() {
  const {addLoginDetails}=useLoginDetails()

  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
   
  };
 
    const handleSubmit = async (e) => {
      e.preventDefault();
      const { email, password} = formData
      const res = await fetch('http://localhost:5174/signin', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
         email, password
        })
      })
      const data = await res.json();
     
      if (!data || res.status === 400) {
        window.alert('Invalid Login')
        console.log('Invalid Login')
      } else {
        window.alert('Login Successfully')
        console.log('Login Successfully')
      navigate('/')
      }
   addLoginDetails(formData)
   
    };
 

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-4 rounded shadow-md w-full max-w-md mt-2">
      <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
      <form onSubmit={handleSubmit} method='POST'>
        
        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder='Email'
            onChange={handleChange}
            className=" relative pl-6 w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
          />
          <label htmlFor="email" className=" mt-[-2rem] absolute block text-gray-700">📫</label>
        </div>
        
      
        <div className="mb-4">
          <input
            type="password"
            id="password"
            name="password"
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
            className=" pl-6 relative w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
          />
          <label htmlFor="password" className=" absolute mt-[-2rem] block text-gray-700">🔒</label>
        </div>
   
        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Login
          </button>
          <NavLink to='/registration'><h6 className='text-sm text-blue-400'>Not Registered? Register</h6></NavLink>
 
        </div>
      </form>
    </div>
  </div>
  );
}

export default Login;