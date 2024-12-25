import Work from "../components/gallery/Work";
import { Link } from "react-router-dom";
import ArrowLeft from '../components/icons/arrowleft';
import FadeInFromBottom from '../components/animations/FadeInFromBottom';
import Sticky from "../components/cards/Sticky.jsx";
import React, { useEffect, useRef, useState } from "react";

function Gallery() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []);

    
    return (
      <div className="mb-16 mt-24 h-full mx-48 px-10 ">
        <div className="md:mb-5 w-full flex flex-row justify-between">
            <div className="mx-auto max-w-4xl text-left">
                <Link to='/'>
                    <a href="#" target='_blank' rel='noopener noreferrer' className=" font-['Myfont'] text-3xl relative inline-flex items-baseline group w-fit text-black font-medium before:content-[''] before:bg-[#FFE68C] before:absolute before:w-[0%] before:h-3 before:z-[-1] before:transition-all before:duration-[0.3s] before:ease-[ease-in-out] before:left-0 before:bottom-2 hover:before:w-full hover:before:bottom-2">
                        <span className="relative z-10">
                        <div className="inline-flex gap-2 items-center">
                            <span className="transition-transform delay-200 group-hover:-translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transition-none translate-x-px">
                            <ArrowLeft/>
                            </span>
                            Katherine Ye            
                        </div>
                        </span>
                    </a>
                </Link>
                <p className=" lg:text-6xl mb-4  font-['Inter-ExtraBold']">
                    Gallery
                </p>
            </div>
            <div className="h-10 translate-x-32 pr-24 ">
                <FadeInFromBottom classNames={'lg:h-full md:h-full w-fit flex flex-col lg:gap-4 md:gap-2'}>
                    <Sticky
                        colour="#9ddcff" 
                        shadow="#82CBF3" 
                        angle="-5deg"
                        title=""
                        text="Collection of rough and polished work from my free time"
                    >
                        
                    </Sticky>
                </FadeInFromBottom>

            </div>
        </div>
        <div className="mt-2">
            <Work></Work>
        </div>
        
      </div>
    );
}
  
export default Gallery;
  