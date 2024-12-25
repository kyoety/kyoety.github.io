import React from "react";

const GallerySec = () => {
    <div className="flex gap-4">
    {[
        [24, 32, 32, 16, 16],
        [32, 40, 56],
        [64, 32, 32],
    ].map((card, index) => (
        <div className="flex-1" key={index}>
            {card.map((height, index) => (
                <div
                className={`mb-4 h-${height} rounded-xl border-2 border-slate-400 bg-neutral-100 p-4 dark:bg-neutral-900`}
                key={index}
                ></div>
            ))}
        </div>
    ))}
    </div>
}

export default GallerySec;