import React from 'react';

const WorkCard = ({title, photo}) => {
    return (
        <div className= "break-inside-avoid mb-4 h-fit group flex overflow-visible flex-wrap flex-1 shrink w-full basis-0 max-md:max-w-full">
            <div className="z-1 flex overflow-visible flex-col border-zinc-200 border  bg-white px-4 pt-4 pb-6 flex-1 shrink basis-0 h-full w-full transition ease-in-out group-hover:shadow-lg">
                <div className="border-zinc-200 border w-full h-full max-md:max-w-full">
                    <img className="object-cover" src={photo} alt={title}></img>
                </div>
            </div>
        </div>
    );
}

export default WorkCard;