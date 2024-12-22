import React from "react";

const Sticky = ({colour, shadow, angle, title, text}) =>{
    return (
        <div className=" font-['Myfont'] text-2xl w-40" style={{rotate: angle}}>
            <div className="w-full h-10" style={{backgroundColor: shadow}}></div>
            <div className="px-5 py-5 w-full min-h-36 drop-shadow-lg" style={{backgroundColor: colour}}>
            {title === 'NULL' ? (
                <>
                    <p>{text}</p>
                </>
            ) : (
                <>
                    <h1>{title}</h1>
                    <p>{text}</p>
                </>
            )}
            
            </div>
        </div>
        
    );
};

export default Sticky;