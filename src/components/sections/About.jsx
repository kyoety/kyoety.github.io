import React from "react";
import Sticky from "../cards/Sticky.jsx"
import StaggeredFadeIn from '../animations/StaggeredFadeIn.jsx';
import info from '../../data/info.js';
import ARROW from '../../images/arrow_tech.png'
import StickyIcon from "../cards/StickyIcon.jsx";
import ReactIcon from "../icons/react.js"; // Import your SVG as a React component
import NodeIcon from "../icons/node_icon.js"; // Import your SVG as a React component
import PythonIcon from "../icons/python.js"; // Import your SVG as a React component
import HEADSHOT from '../../images/headshot.png'
import FadeInFromBottom from "../animations/FadeInFromBottom.jsx";


const TextContent = () => {
    return (
        <li className=" flex-1 leading-7 font-normal flex h-fit flex-col">
            {/*<p className={`self-start pb-4 last:pb-0 basis-0 max-md:max-w-full text-justify`}>
                If there's one sentance you'd use to describe me it might be: <br/><span className="font-semibold">I like to keep my hands busy.</span>
            </p>*/}
            <p className={`self-start pb-6 last:pb-0 basis-0 max-md:max-w-full text-justify`}>
               I'm a Computer Engineering student interested in the intersection of creativity and innovation, and exploring the application of technology in our everyday lives and interdisciplinarily in other fields. As I continue my journey in this ever-evolving industry,  <span className="font-semibold">I'm excited to keep my hands busy — learning, experimenting, and contributing to the future of technology</span>.
            </p> 
            <p className={`text-justify self-start pb-4 last:pb-0 basis-0 max-md:max-w-full `}>
                When I'm not at my computer you can find me <span className="font-semibold"> drawing, practicing guitar/piano, on a hike, or playing the NYT crossword archives.</span>
            </p> 
        </li> 
    );
}

const ImagePlaceholder = () => {
    return (
        <div className="">
            <FadeInFromBottom>
                <div className="h-[320px] -translate-y-8 hover:rotate-[-2deg] flex overflow-clip flex-col border-zinc-200 border bg-white px-4 pt-4 pb-4 flex-1 shadow hover:shadpw-xl hover:-translate-y-10 transition ease-in-out">
                    <div className="border-zinc-200 border overflow-hidden w-full h-full">
                        <img src={HEADSHOT} about="Hmm...this should be a picture of me" className=" h-full w-full object-scale-down "/>
                    </div>
                </div>
            </FadeInFromBottom>
        </div>
    );
}

function AboutMe() {
    const paragraphs = [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 
      "Outside of work you can find me drawing or painting, cooking, on a hike, at the tennis court, or playing the NYT crossword archives."
    ];

    return (
        <div className="flex flex-col w-full text-left px-20 mt-8">
            <div className="flex flex-col gap-4 justify-center w-full text-black max-md:max-w-full ">
                <h1 className="text-5xl font-['Myfont'] max-md:max-w-full">
                    A bit about me:
                </h1>
                <div className="flex flex-col ">
                    <div className="flex h-full w-full flex-row gap-x-10 mb-12">
                        <TextContent contents={paragraphs} />
                        <ImagePlaceholder />
                    </div> 
                    <div className="flex flex-row justify-center">

                        <div className="">
                            <StaggeredFadeIn classNames={'flex flex-row gap-1.5'}>
                                <StickyIcon colour="#9ddcff" shadow="#82CBF3" angle="5deg" text="Hello this is a sticky" Icon={ReactIcon} iconSize={20} />
                                <StickyIcon colour="#ffc9f0" shadow="#EEA8DA" angle="-5deg" text="Hello this is a sticky" Icon={NodeIcon} iconSize={20} />
                                <StickyIcon colour="#FFE68C" shadow="#F5D972" angle="5deg" text="Hello this is a sticky" Icon={PythonIcon} iconSize={20}  />
                            </StaggeredFadeIn>
                        </div>
                        <div className="flex w-fit">
                                <img src={ARROW} className=" -translate-y-4 object-scale-down max-w-52"/>
                        </div>
                    </div>
   
                </div>
                
            </div>
            {/*
            <article className="flex flex-col justify-center w-full text-black max-md:max-w-full">
                <h1 className="text-2xl font-semibold leading-none max-md:max-w-full">
                # about_me
                </h1>
                <div className="flex flex-wrap gap-10 mt-10 w-full text-base max-md:max-w-full">
                <TextContent content={paragraphs[0]} />
                <ImagePlaceholder />
                </div>
            </article>
            */}
            
        </div>
    );
}

export default AboutMe;