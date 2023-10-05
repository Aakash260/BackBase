 import React from 'react'
 import Navbar from './components/Navbar'
 import Home from './pages/Home'
 import About from './pages/About'
 import Login from './pages/Login'
 import Registration from './pages/Registration'
 import Contact from './pages/Contact'
 import Error from './pages/Error'
 import Logout from './pages/Logout'
 import { BrowserRouter,Route,Routes } from 'react-router-dom'
 const App = () => {
   return (
     <div>
     <BrowserRouter>
     <Navbar/> 
     <Routes>
      <Route index path='/' element={<Home/>}/>
      <Route path='about' element={<About/>} />
      <Route path='login' element={<Login/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='registration' element={<Registration/>} />
      <Route path='logout' element={<Logout/>} />
      <Route path='*' element={<Error/>}/>
     </Routes>
     </BrowserRouter>
     </div>
   )
 }
 
 export default App