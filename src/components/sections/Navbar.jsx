import React, { useState, useEffect } from 'react';
import Socials from '../cards/Socials'
import { Outlet, Link } from "react-router-dom";

const navLinks = [
    { title: 'HOME', url: '/' },
    { title: 'GALLERY', url: '/gallery' },
    { title: 'PROJECTS', url: '/projects' }
];

const bgColor = 'bg-gray-800';
const modalColor = 'bg-gray-900';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 769);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const handleBarsIconClick = () => {
        toggleModal();
    };

    return (
        <>  
        
        <nav className="flex flex-row -translate-x-[300px] w-full h-full transition ease-in-out delay-200 duration-300 hover:-translate-x-40 hover:rotate-[2deg] ">
                <div className="bg-[#FFE68C] flex flex-col justify-between w-full min-w-80 drop-shadow-md items-end h-full pt-20 pb-24 px-12 ">
                    <ul className="flex flex-col gap-4 md:gap-4 text-left cursor-pointer">
                        {navLinks.map((link, index) => (
                            <li key={index} className="text-black font-['MyFont']  pl-20 text-2xl duration-100 hover:-translate-y-1">
                                <Link to={link.url}>
                                {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Socials/>
                </div>
                <div className="overflow-hidden pr-8 ">
                    <div className="rounded-r-lg bg-[#FFE68C] mt-16 pt-10 flex flex-col drop-shadow-md w-10 h-32 cursor-pointer">
                        <p className="font-['MyFont'] w-full text-2xl rotate-[90deg]">MENU</p>
                    </div>
                </div>
                
            </nav>
        </>
    );
}

export default Navbar;