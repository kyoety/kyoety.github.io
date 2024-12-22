import React from "react";
import IconLinkedin from "../icons/linkedin"
import IconInstagram from "../icons/instagram";
import IconGitHub from "../icons/github";

const Socials = () => {
    return (
        <div className="flex flex-col w-fit h-fit pr-4 ">

            <div className=" z-10 gap-6 w-fit h-fit pt-6 flex flex-col ">
                <p className="rotate-[90deg] text-3xl mb-10 font-['MyFont']"></p>
                <a href='https://www.linkedin.com/in/katherineytye/' target='_blank' className="size-8 hover:-translate-y-2"> <IconLinkedin/></a>
                <a href='https://www.instagram.com/_chezkath/' target='_blank' className="size-8  hover:-translate-y-2"> <IconInstagram/></a>
                <a href='https://github.com/kyoety' target='_blank' className="size-9 transition ease-in-out duration-300 hover:-translate-y-2"> <IconGitHub/></a>
            </div>

        </div>
    );
};  

export default Socials;