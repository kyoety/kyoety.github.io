import React from 'react'
import Navbar from '../components/sections/Navbar'
import Footer from '../components/sections/Footer'
import { Outlet, Link } from "react-router-dom";


const Layout = () => {
    return (
        <>
        <div className="flex justify-center h-dvw w-full">
            <aside className=' h-[105vh] fixed -translate-y-2 top-0 left-0 '>
                <Navbar></Navbar>
            </aside>
            
            <main className="w-full">
                <div className='bg-main'>
                    <Outlet />
                    <Footer/>
                </div>
            </main>
        </div>
        
        </>
    )
}

export default Layout