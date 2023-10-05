import React, { useState} from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    work: '',
    password: '',
    confirmPassword: '',
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
    const { name, email, phone, work, password, confirmPassword } = formData
    const res = await fetch('http://localhost:5174/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name, email, phone, work, password, cpassword: confirmPassword
      })
    })
    const data = await res.json();

    if (!data || res.status === 422) {
      window.alert('Invalid Registration')
      console.log('Invalid Registration')
    } else {
      window.alert('Registration Successfully')
      console.log('Registration Successfully')
      navigate('/login')
    }
    console.log(formData);
    
  };

  return (
    <div className="min-h-[90%] flex items-center justify-center bg-gray-100">
      <div className="bg-white p-4 rounded shadow-md w-full max-w-md mt-2">
        <h2 className="text-2xl font-semibold text-center mb-4">Register</h2>
        <form onSubmit={handleSubmit} method='POST'>
          <div className="mb-4">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder='Name'
              className=" pl-6 relative w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
            />
            <label htmlFor="name" className="absolute mt-[-2rem] block text-gray-700">🧑‍🏫</label>
          </div>
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
              type="text"
              id="phone"
              name="phone"
              placeholder='Phone'
              value={formData.phone}
              onChange={handleChange}
              className=" relative pl-6 w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
            />
            <label htmlFor="phone" className=" absolute mt-[-2rem] block text-gray-700">☎️</label>
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="work"
              name="work"
              placeholder='Work'
              value={formData.work}
              onChange={handleChange}
              className="pl-6 relative w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
            />
            <label htmlFor="work" className=" absolute mt-[-2rem] block text-gray-700">👷‍♂️</label>
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
          <div className="mb-4">
            <input
              type="password"
              id="confirmPassword"
              placeholder='Confirm Password'
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className=" relative pl-6 w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring focus:border-blue-300"
            />
            <label htmlFor="confirmPassword" className="block text-gray-700 absolute mt-[-2rem]">🔒</label>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Register
            </button>
            <NavLink to='/login'><h6 className='text-sm text-blue-400'>Already Registered? Login</h6></NavLink>

          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
