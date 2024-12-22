import React from 'react';
import ProjectCard from '../projects/ProjectCard.jsx';
import info from '../../data/info.js';
import ArrowRight from '../icons/arrowright';
import FadeInFromBottom from '../animations/FadeInFromBottom';
import StaggeredFadeIn from '../animations/StaggeredFadeIn';

const projectsData = [
  {
    title: "Othello playing AI",
    description: "Developing frameworks for the ethical implementation of GenAI in engineering education, supervised by Dr Qin Liu and Professor Greg Evans. Methodology includes usability testing of GenAI models (focused on multi-modal and chain of thought prompting) and analysis of LLM architecture",
    technologies: ["C++"],
    imagePosition: "right"
  },
  {
    title: "tutori.me",
    description: "Web-app supporting free peer tutoring for underrepresented communities network of 200+ high-school students. Features include live chat, dashboard, scheduling and booking, user to user interactions, and more. // Sponsored by Pathways to Education // Network 200+ students",
    technologies: ["HTML", "CSS", "JavaScript", "C#", "MSQL", "Docker", "GitHub"],
    imagePosition: "left"
  },
  {
    title: "Rideshare application",
    description: "Self-service multiplatform app for organizing carpooling between drivers and passangers. Features include live map, updates, and XXX idk man. // 200+ users",
    technologies: ["HTML", "CSS", "JavaScript", "Python", "MySQL", "Django", "GitHub"],
    imagePosition: "right"

  }

];

const Projects = () => {

    return (
  
      <div className="flex flex-col w-full pb-20 pt-20 text-left">
  
        <h1 className=" text-4xl font-['Inter-ExtraBold'] px-20 text-black w-full">
  
          Featured Projects
  
        </h1>
  
        <section className="flex flex-col mt-6 mb-10  w-full gap-6">
          <StaggeredFadeIn classNames={'flex flex-col  gap-6'}>
            {info.projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                external={project.external}
                description={project.description}
                technologies={project.technologies}
                imagePosition={project.imagePosition}
                photo={project.photo}
                alt={project.alt}
              />
            ))}
          </StaggeredFadeIn>

        </section>
        <div className="pl-20">
          <a href="#" target='_blank' rel='noopener noreferrer' className=" font-['Myfont'] text-3xl relative inline-flex items-baseline group w-fit text-black font-medium before:content-[''] before:bg-[#FFE68C] before:absolute before:w-[0%] before:h-3 before:z-[-1] before:transition-all before:duration-[0.3s] before:ease-[ease-in-out] before:left-0 before:bottom-2 hover:before:w-full hover:before:bottom-2">
            <span className="relative z-10">
              <div className="inline-flex gap-2 items-center">
                View all projects
                <span className="transition-transform delay-200 group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transition-none translate-x-px">
                  <ArrowRight/>
                </span>
              </div>
            </span>
          </a>
        </div>



      </div>
  
    );
  
};
  
  
export default Projects;
  
  