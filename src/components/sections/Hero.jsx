import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import FadeInFromBottom from '../animations/FadeInFromBottom';
import AVATAR from '../../images/avatar.PNG';
import HOVER_PLAY from '../../images/hover_play.png';
import HELLO_THERE from '../../images/hello_there.mp4'
import IconLinkedin from "../icons/linkedin"
import IconGitHub from "../icons/github";

const Stickies = () => {
    const [isHovered, setIsHovered] = useState(false);
    const videoRef = useRef(null);
    const [isPeeled, setIsPeeled] = useState(false);


    const handleMouseEnter = () => {
        setIsPeeled(true);
        setIsHovered(true);
        if (videoRef.current) {
            videoRef.current.currentTime = 0; // Reset the video to the beginning
            videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        setIsPeeled(false);
        setIsHovered(false);
        if (videoRef.current) {
            videoRef.current.pause();
        }
    };

    return(
        <div className="shrink-1 flex flex-col -translate-y-4 -translate-x-8">
            <FadeInFromBottom classNames={' lg:h-full md:h-full w-full flex flex-col lg:gap-4 md:gap-2'}>
                <div className="relative translate-x-20 z-10 font-['Myfont'] text-2xl w-full lg:max-w-64 md:max-w-40 rotate-[-2deg] h-full lg:max-h-28 md:max-h-20">
                    <div className="w-full lg:h-10 md:h-6 bg-[#EEA8DA]"></div>
                    <div className="flex flex-row justify-center py-2 w-full h-full drop-shadow-lg min-w-96 font-['Myfont'] bg-[#ffc9f0]">
                        <a href='https://www.linkedin.com/in/katherineytye/' target='_blank' className="mx-6 size-8 transition ease-in-out duration-100 hover:-translate-y-2"> <IconLinkedin/></a>
                        {/*<a href='https://www.instagram.com/_chezkath/' target='_blank' className="size-8  hover:-translate-y-2"> <IconInstagram/></a>*/}
                        <a href='https://github.com/kyoety' target='_blank' className="size-9 mx-6 transition ease-in-out duration-100 hover:-translate-y-2"> <IconGitHub/></a>
                    </div>
                </div>
                <div 
                
                    className="relative shrink-1 z-0 rotate-[4deg] lg:max-h-48 md:max-h-36 w-full h-full"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="w-full lg:h-10 md:h-6 bg-[#82CBF3]"></div>
                    <div className="relative flex flex-1 w-full h-full ">
                        {/* Underlying Content */}     
                        <div className=" h-full w-full text-white flex items-center justify-center">
                        <video
                            ref={videoRef}
                            src={HELLO_THERE} // Replace with your video URL
                            className="absolute top-0 left-0  h-full w-full object-cover"
                            loop
                            
                        />
                        </div>
                        {/* Peeling Layer */}
                        <div className="absolute top-0 left-0 font-['Myfont'] h-full w-full">
                            <div className="flex place-content-center pt-4 h-full w-full drop-shadow-lg bg-[#9ddcff] "
                                style={{
                                    transform: isPeeled ? 'rotateX(85deg)' : 'none',
                                    transformOrigin: 'top center',
                                    transition: 'transform 0.7s ease-in-out, box-shadow 0.7s ease-in-out',
                                    boxShadow: isPeeled ? '0 60px 60px rgba(0, 0, 0, 0.3)' : 'none',
                                }}
                            >
                                <img className="object-scale-down  h-full w-full"  src={AVATAR} />
                            </div>
                        </div>

                    </div>
                </div>

            </FadeInFromBottom>
            
        </div>
    );
}

const Profile = () => {
    
    return (
        <div className="flex shrink-0 pb-10 flex-col h-full w-fit text-left">
                {/*
                {target && <MouseTracker offset={{ x: 1, y: 1 }}>
                        <iframe width="280" height="158" src="https://www.youtube.com/embed/rEq1Z0bjdwc?autoplay=1&start=8" allowfullscreen>
                        </iframe>
                    </MouseTracker>} */}
                <div className="m-auto flex flex-col w-full gap-3">
                    <p className="lg:text-6xl lg:mb-6 md:text-3xl md:mb-5 font-['Inter-ExtraBold']">
                        Hi, my name is
                    </p>
                    <p className="lg:text-6xl md:text-3xl font-['Inter-ExtraBold'] relative inline-flex items-end w-fit bg-[#FFE68C] absolute lg:h-8 md:h-6 z-[-1] bottom-0 ">
                        Katherine Ye
                    </p>
                    <p className=" w-full lg:max-w-sm md:max-w-sm shrink-1 flex-1 text-justify lg:mt-4 md:mt-4 lg:text-xl md:text-xl lg:leading-8 md:leading-6 font-medium text-[color:var(--sds-color-text-default-default)]">
                        I'm a <span className="underline lg:underline-offset-4 md:underline-offset-2 decoration-2 decoration-[#F384D4] ">designer and developer studying Computer Engineering at the University of Toronto</span>. I love building things and helping people!
                    </p>
                </div>
                
                {/*
                <div className="flex items-start mt-0">
                    <div className="flex z-10 shrink-0 mr-0 max-w-full bg-yellow-400 bg-opacity-50 h-[18px] w-[378px]"/>
                    <div className="flex z-10 shrink-0 mt-8 mr-0 max-w-full bg-yellow-400 bg-opacity-50 h-[18px] w-[392px]"/>
                </div>
                */}
        </div>
    
    );
};

const Hero = () => {
  return (
    <div className='flex px-20 justify-stretch flex-row h-fit lg:gap-10 md:gap-6 columns-2 w-full'>
        <Profile />
        <Stickies />
    </div>
  );
};

export default Hero;

