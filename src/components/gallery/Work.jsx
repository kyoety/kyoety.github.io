import React from 'react';
import WorkCard from './WorkCard';
import info from '../../data/info';

const Work = () => {
    return (
        <div>
            <div className="columns-3 gap-4">
                {info.work.map((work, index) => (
                    <div
                    key={index}
                    >
                        <WorkCard
                            title = {work.title}
                            photo = {work.photo}
                            
                        />
                    </div>
                ))}
            </div>
        </div>
        
    );
}

export default Work;