import React from 'react'
import Sidebar from './sections/Sidebar'
import Socials from './cards/Socials'
import Navbar from './sections/Navbar'

const Layout = ({children}) => {
    return (
        <>
        <div className="flex justify-center h-dvw w-full">
            <aside className=' h-[105vh] fixed -translate-y-2 top-0 left-0 '>
                <Navbar></Navbar>
            </aside>
            
            <main className="  pt-10 py-12 mx-auto max-w-4xl">
                <div className='mt-32 bg-main'>
                    {children}
                </div>
            </main>
        </div>
            
        </>
    )
}

export default Layout