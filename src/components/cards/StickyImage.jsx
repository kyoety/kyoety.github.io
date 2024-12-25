import React from "react";

const StickyImage = ({colour, shadow, angle, title, Image}) =>{
    return (
        <div className=" font-['Myfont'] text-2xl w-40" style={{rotate: angle}}>
            <div className="w-full h-10" style={{backgroundColor: shadow}}></div>
            <div className="flex justify-center px-8 py-8 w-full min-h-36 drop-shadow-lg" style={{backgroundColor: colour}}>
            {title === 'NULL' ? (
                <>
                    <img src={Image}></img>
                </>
            ) : (
                <>
                    <img src={Image}></img>
                    <h1>{title}</h1>
                </>
            )}
            
            </div>
        </div>
        
    );
};

export default StickyImage;