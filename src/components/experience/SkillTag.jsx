import React from 'react';


function SkillTag({ skill }) {
  return (
    <span className="flex overflow-hidden gap-2.5 justify-center items-center px-4 py-1 text-xs font-medium bg-zinc-100 rounded-[5px]">
      {skill}
    </span>
  );
}

export default SkillTag;