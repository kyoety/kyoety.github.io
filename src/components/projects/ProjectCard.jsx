import React from 'react';
import IconExternal from '../icons/external';
import IconExternalOpen from '../icons/externalopen';
import StaggeredFadeIn from '../animations/StaggeredFadeIn';

const ProjectCard = ({ title, description, technologies, imagePosition, external, photo, alt}) => {

  return (
    <div className="flex overflow-visible ">
        {imagePosition === 'left' ? (
            <>
                <div className="pr-10 group flex overflow-visible flex-wrap flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
                    <div className="z-1 flex overflow-visible flex-col border-zinc-200 border rotate-2 bg-white px-4 pt-4 pb-6 flex-1 shrink basis-0 h-full max-h-[280px] w-full max-w-[420px] transition ease-in-out group-hover:shadow-xl">
                        <div className="border-zinc-200 border w-full max-md:max-w-full">
                            <img className="object-cover" src={photo} alt={alt}></img>
                        </div>
                    </div>
                    <ProjectDetails title={title} description={description} technologies={technologies} external={external}/>
                </div>
            </>
        ) : (
            <>
                <div className="pl-10 group flex overflow-visible flex-wrap flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
                    <ProjectDetails title={title} description={description} technologies={technologies} external={external}/>
                    <div className="z-1 flex overflow-visible flex-col border-zinc-200 border rotate-[-2deg] bg-white px-4 pt-4 pb-6 flex-1 shrink basis-0 shadow h-full max-h-[280px] w-full max-w-[420px] transition ease-in-out group-hover:shadow-xl">
                        <div className="border-zinc-200 border  w-full h-full max-md:max-w-full">
                            <img  className="object-cover" src={photo} alt={alt}></img>
                        </div>
                    </div>
                </div>
            </>
        )}

    </div>
  );
};

const ProjectDetails = ({ title, description, technologies, external}) => {
    return (
        <div className="shadow flex bg-white overflow-hidden flex-col flex-1 border-zinc-200 border rounded pt-4 pb-6 min-h-[240px] shrink text-left  text-sm basis-0 min-w-[240px] ">
            <div className="h-fit">
                <h3 className="px-6 text-base inline-flex leading-6 items-baseline w-fit text-black font-bold max-md:max-w-fit relative absolute h-3 w-full ">
                    <a href={external} target="_blank" rel="noopener noreferrer" className="inline-flex gap-2 group items-center ">
                        {title}
                        <span className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none translate-y-px">
                            <IconExternalOpen/>
                        </span>
                    </a>
                </h3>
                <hr class="h-px my-2  bg-red-200 border-0 dark:bg-gray-700"></hr>
            </div>

            <div class="h-full flex flex-col justify-between">
                <div>
                    <p className="px-6 text-sm leading-6 text-zinc-500 max-md:max-w-full">{description}</p>
                </div>
                
                <div className="px-6 flex overflow-hidden flex-wrap gap-2.5 items-start mt-3.5 w-full whitespace-nowrap max-md:max-w-full">
                    {technologies.map((tech, index) => (
                        <span key={index} className="flex overflow-hidden gap-2.5 justify-center items-center px-4 py-1 text-xs font-medium bg-zinc-100 rounded-[5px]">
                            <span className="self-stretch my-auto bg-clip-text">{tech}</span>
                        </span>
                    ))}
                </div>
            </div>
            
        </div>
    );
};
  
export default ProjectCard;