import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from "../pages/about/About";
import Github from "../pages/github/Github";
import Logout from "../pages/logout/Logout";
import NotFound from "../components/NotFound";
import Navbar from "../components/navbar/Navbar";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";




const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
            <Navbar />
                <Routes>
                    <Route path='/' element={<Login />}/>
                    <Route path='/home' element={<Home />}/>
                    <Route path='/login' element={<Login />}/>
                    <Route path='/about' element={<About />}/>
                    <Route path='/github' element={<Github />}/>
                    <Route path='/logout' element={<Logout />}/>
                    <Route path='/*' element={<NotFound />}/>
                </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AppRouter