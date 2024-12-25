
import Layout from "./Layout";
import Footer from '../components/sections/Footer';
import React, { useEffect, useRef, useState } from "react";
import SkillTag from "../components/experience/SkillTag";
import info from "../data/info";
import ArrowLeft from '../components/icons/arrowleft';
import { Link } from "react-router-dom";
import IconExternalOpen from '../components/icons/externalopen';


function Projects() {
  const tableContainerRef = useRef(null);
  const tableRef = useRef(null);
  const [emptyRows, setEmptyRows] = useState([]);
  const [cHeight, setCHeight] = useState(0);
  const [minRowHeight, setMinRowHeight] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  useEffect(() => {
    if (tableRef.current) {
      const rows = tableRef.current.querySelectorAll("tr");
      let minHeight = Infinity;

      rows.forEach((row) => {
        const rowHeight = row.getBoundingClientRect().height;
        if (rowHeight > 0) {
          minHeight = Math.min(minHeight, rowHeight);
        }
      });

      setMinRowHeight(minHeight === Infinity ? 0 : minHeight);
    }
  }, [info.projects]);

  useEffect(() => {
    const calculateEmptyRows = () => {
      if (tableContainerRef.current) {
        const containerHeight = tableContainerRef.current.offsetHeight;
        const rowHeight = 58; // Assume each row is 40px high (update this based on your actual row height)
        const visibleRows = Math.floor(containerHeight / rowHeight);
        const additionalRows = Math.max(visibleRows - info.projects.length - 1, 0);
        setEmptyRows(Array.from({ length: additionalRows }));
        setCHeight(containerHeight);
      }
    };

    calculateEmptyRows();
    window.addEventListener("resize", calculateEmptyRows);

    return () => {
      window.removeEventListener("resize", calculateEmptyRows);
    };
  }, [info.projects]);

    return (
      <div className="mt-24 min-h-svh">
        
        
        <div ref={tableContainerRef} className="h-full overflow-hidden">
          <div className="mx-auto max-w-4xl px-20 lg:mb-10 md:text-3xl md:mb-5 text-left">
            <Link to='/'>
              <a href="#" target='_blank' rel='noopener noreferrer' className=" font-['Myfont'] text-3xl relative inline-flex items-baseline group w-fit text-black font-medium before:content-[''] before:bg-[#FFE68C] before:absolute before:w-[0%] before:h-3 before:z-[-1] before:transition-all before:duration-[0.3s] before:ease-[ease-in-out] before:left-0 before:bottom-2 hover:before:w-full hover:before:bottom-2">
                <span className="relative z-10">
                  <div className="inline-flex gap-2 items-center">
                    <span className="transition-transform delay-200 group-hover:-translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transition-none translate-x-px">
                      <ArrowLeft/>
                    </span>
                    Katherine Ye            
                  </div>
                </span>
              </a>
            </Link>
            
            <p className=" lg:text-6xl  font-['Inter-ExtraBold']">
            All Projects
            </p>
          </div>
          <table ref={tableRef} className="px-40 mt-2 w-full border-collapse table-auto text-left ">
            <thead className="sticky top-0 z-10 border-b-2 border-[#ffc9f0]  py-5 ">
              <tr className="">
                <th className="w-64"></th>
                <th className="py-4 pl-10 pr-10 text-sm font-semibold ">Year</th>
                <th className="py-4 pr-10 text-sm font-semibold ">Project</th>
                <th className="hidden py-4 pr-10 text-sm font-semibold lg:table-cell">Built with</th>
                <th className="hidden py-4 pr-10 text-sm font-semibold sm:table-cell">Link</th>
                <th className="w-48"></th>
              </tr>
            </thead>
            <tbody>
              {info.projects.map((project, index) => (
                <tr className="notempty border-b-2 border-sky-100 last:border-none">
                  <td className=""></td>
                  <td className="py-4  pl-10 pr-8 align-top text-sm text-zinc-400">
                    <div className="translate-y-px">{project.year}</div>
                  </td>
                  <td className="py-4 pr-4 align-top font-semibold leading-snug">
                    <div class="hidden sm:block">
                      {project.title}
                    </div>
                  </td>
                  <td className="hidden py-4 pr-8 align-top lg:table-cell">
                    <div className="flex text-xs font-medium overflow-hidden flex-wrap gap-2.5 w-96 items-start whitespace-nowrap max-md:max-w-full">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="flex overflow-hidden gap-2.5 justify-center items-center px-4 py-1 text-xs font-medium bg-zinc-100 rounded-[5px]">
                          <span className="self-stretch my-auto bg-clip-text">{tech}</span>
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="hidden py-4  align-top sm:table-cell">
                      <ul>
                        <li>
                          {project.ext === "" ? (
                            <a 
                            className="inline-flex gap-2 items-center font-medium leading-tight group text-sm"
                            
                            target="_blank" 
                            rel="noreferrer noopener"
                            href = {project.external}
                          >
                            {project.ext}
                            <span className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none translate-y-px">
                              <IconExternalOpen/>
                            </span>
                          </a>
                          ):(
                          <a 
                            className="inline-flex gap-2 items-center font-medium leading-tight group text-sm"
                            
                            target="_blank" 
                            rel="noreferrer noopener"
                            href = {project.external}
                          >
                            {project.ext}
                            
                          </a>
                          )}
                          
                        </li>
                      </ul>
                  </td>
                </tr>
              ))}
              {emptyRows.map((_, index) => (
                <tr className="notempty border-b-2 border-sky-100 last:border-none">
                <td className=""></td>
                <td className="py-4  pl-10 pr-8 align-top text-sm text-zinc-400">
                  <div className="translate-y-px"></div>
                </td>
                <td className="py-4 pr-4 align-top font-semibold leading-snug">
                  <div class="hidden sm:block">
                  </div>
                </td>
                <td className="hidden py-4 pr-8 align-top lg:table-cell">
                  <div className="flex text-xs font-medium overflow-hidden flex-wrap gap-2.5 items-start w-96 whitespace-nowrap max-md:max-w-full">
                    
                  </div>
                </td>
                <td className="hidden py-4  align-top sm:table-cell">
                    <ul>
                      <li>
                        <a 
                          className="inline-flex items-baseline font-medium leading-tight hover:text-teal-300 focus-visible:text-teal-300 text-sm focus-visible:text-teal-300 group/link text-sm"
                          target="_blank" 
                          rel="noreferrer noopener"
                          href="/"
                        >
                        </a>
                      </li>
                    </ul>
                </td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
}
  
export default Projects;
  