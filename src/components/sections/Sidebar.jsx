import React from 'react';

const FolderItem = ({ icon, name }) => {
  return (
    <div className="flex overflow-hidden gap-1.5 items-center py-4 pr-11 pl-9 w-full hover:bg-zinc-200 cursor-pointer">
      <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 self-stretch my-auto aspect-square w-5" />
      <div className="self-stretch my-auto">{name}</div>
    </div>
  )
}

const FileItem = ({ icon, name }) => {
    return (
      <div className="flex overflow-hidden gap-2.5 items-center py-4 pr-12 pl-10 w-full hover:bg-zinc-200 cursor-pointer">
        <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 self-stretch my-auto w-5 aspect-[0.92]" />
        <div className="self-stretch my-auto">{name}</div>
      </div>
    );
};

const Sidebar = () => {

  const files = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8d23fb12615a904753435f1cddafd70f2949bf805cad53e1147f30640a993a81?apiKey=41a05d9f32184de6ab741feeca2fc9c4&&apiKey=41a05d9f32184de6ab741feeca2fc9c4", name: "README.md" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c7530828d68b4151a34487a9eded8a784eb053947c5ef81c790f50558a95d079?apiKey=41a05d9f32184de6ab741feeca2fc9c4&&apiKey=41a05d9f32184de6ab741feeca2fc9c4", name: "about_me.txt" }
  ];

  const folders = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a5b5aaf93c303a7069f749f11b80cb319296e140e255ddb3d5b1dbe30a8292da?apiKey=41a05d9f32184de6ab741feeca2fc9c4&&apiKey=41a05d9f32184de6ab741feeca2fc9c4", name: "my_experience" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a5b5aaf93c303a7069f749f11b80cb319296e140e255ddb3d5b1dbe30a8292da?apiKey=41a05d9f32184de6ab741feeca2fc9c4&&apiKey=41a05d9f32184de6ab741feeca2fc9c4", name: "my_projects" }
  ];

  return (
    <nav className="flex overflow-hidden flex-col text-sm font-semibold whitespace-nowrap pt-[100px] min-h-screen text-neutral-500 md:w-[244px]">
      {files.map((file, index) => (
        <FileItem key={index} icon={file.icon} name={file.name} />
      ))}
      {folders.map((folder, index) => (
        <FolderItem key={index} icon={folder.icon} name={folder.name} />
      ))}
    </nav>
  );
};

export default Sidebar;

