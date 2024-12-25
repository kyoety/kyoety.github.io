import React from 'react';
import SkillTag from './SkillTag';

function Card({ period, title, description, skills, number }) {

    return (
        <div className="flex flex-row gap-2.5 items-start w-full lg:max-w-[680px]">
            <p className="mr-24 text-base w-fit text-nowrap text-zinc-400 ">{period}</p>
            <div className="flex flex-col text-sm w-fit">
                <h3 className={`
                    ${number==1 ? 'text-base font-bold text-black underline underline-offset-4 decoration-2 decoration-[#FFE68C] max-md:max-w-full' : ''}
                    ${number==2 ? 'text-base font-bold text-black underline underline-offset-4 decoration-2 decoration-[#F384D4] max-md:max-w-full' : ''}
                    ${number==3 ? 'text-base font-bold text-black underline underline-offset-4 decoration-2 decoration-[#9ddcff] max-md:max-w-full' : ''}
                `}>
                    {title}
                </h3>
                <p className="text-justify mt-2 text-sm leading-6 text-zinc-500 max-md:max-w-full">
                    {description}
                </p>
                {   skills && (
                <div className="flex text-xs font-medium overflow-hidden flex-wrap gap-2 items-start mt-3.5 w-full whitespace-nowrap max-md:max-w-full">
                    {skills.map((skill, index) => (
                    <SkillTag key={index} skill={skill} />
                    ))}
                </div>
                )}
            </div>
        </div>
    );
}

export default Card;