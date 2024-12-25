import React from 'react';
import Card from '../experience/ExperienceCard.jsx';
import info from '../../data/info.js';
import Pdf from "../documents/resume.pdf";
import IconExternalOpen from '../icons/externalopen';
import CAT from "../../images/cat.png";
import CAT_PET from "../../images/cat_pet.png";
import CAT_MOUSE from "../../images/cat_mouse.png";
import CAT_CLICK from "../../images/cat_click.png";
import { useState } from 'react';


const experienceData = [
  {
    period: "2024-Present",
    title: "Co-Op Designer · JP Thomson Architects Ltd",
    description: "Developing company website, admin portal,and management system for easy and flexible user-based management of company information. Managing social media accounts and content creation, leading to a 50% increase in engagement within one month.",
    skills: ["HTML", "CSS", "JavaScript", "C#", "MSQL", "Docker", "GitHub"]
  },
  {
    period: "2024-Present",
    title: "Research Assistant · GenAI Impacts @ ISTEP, Univeristy of Toronto",
    description: "Developing frameworks for the ethical implementation of GenAI in engineering education, supervised by Dr Qin Liu and Professor Greg Evans. Methodology includes usability testing of GenAI models (focused on multi-modal and chain of thought prompting) and analysis of LLM architecture"
  }
];


function Experience() {
  const [isHovered, setIsHovered] = useState(false);
  const [isIn, setIsIn] = useState(false);


  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseIn = () => {
    setIsIn(true);
  };

  const handleMouseOut = () => {
    setIsIn(false);
  };

  return (
      <div className="flex flex-col  px-20 w-full mb-6 text-left">
  
          <div className="flex pr-10 flex-row w-full h-fit items-end justify-between">
            <h2 className="text-4xl font-['Inter-ExtraBold'] text-black">
                Experience
            </h2>
            <div className=" flex flex-row items-center gap-5 translate-y-10">
              <div className="  max-w-32 w-full h-full" onMouseEnter={handleMouseIn} onMouseLeave={handleMouseOut}>
                {isIn ? (
                  <img src={CAT_CLICK} alt="cat pet" className="cursor-grab object-scale-down"/>
                ) : (
                  <img src={CAT_MOUSE} alt="cat" className="object-scale-down"/>
                )}
              </div>
              <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="w-full h-full max-w-32">
                {isHovered ? (
                  <img src={CAT_PET} alt="cat pet" className=" cursor-grab object-scale-down"/>
                ) : (
                  <img src={CAT} alt="cat" className="object-scale-down"/>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex gap-12 flex-col mt-10 max-w-fit">
                {info.experience.map((item, index) => (
                  <Card 
                    key={index}
                    period={item.period}
                    title={item.title}
                    description={item.description}
                    skills={item.skills}
                    number={item.number}
                  />
                ))}
            </div>
          </div>
          <a href={Pdf} target='_blank' rel='noopener noreferrer' className="font-['Myfont'] mt-8 text-3xl relative inline-flex items-baseline group w-fit text-black font-medium before:content-[''] before:bg-[#FFE68C] before:absolute before:w-[0%] before:h-3 before:z-[-1] before:transition-all before:duration-[0.3s] before:ease-[ease-in-out] before:left-0 before:bottom-2 hover:before:w-full hover:before:bottom-2">
            <span className="relative z-10">
              <div className="inline-flex gap-2 items-center">
                View full resume
                <span className="transition-transform delay-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none translate-y-px">
                  <IconExternalOpen/>
                </span>
              </div>
            </span>
          </a>
      </div>
    );
}

export default Experience;

