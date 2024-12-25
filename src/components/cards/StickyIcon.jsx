import React from "react";

const StickyIcon = ({colour, shadow, angle, title, Icon, iconSize = 20}) =>{
    return (
        <div className=" hover:-translate-y-2 transition ease-in-out font-['Myfont'] text-2xl w-40" style={{rotate: angle}}>
            <div className="w-full h-10" style={{backgroundColor: shadow}}></div>
            <div className="flex justify-center px-8 py-8 w-full min-h-36 drop-shadow-lg" style={{backgroundColor: colour}}>
            {title === 'NULL' ? (
                <>
                    <Icon size={iconSize}/>
                </>
            ) : (
                <>
                    <Icon size={iconSize}/>
                    <h1>{title}</h1>
                </>
            )}
            
            </div>
        </div>
        
    );
};

export default StickyIcon;