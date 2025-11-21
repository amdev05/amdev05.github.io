import { PROJECTS } from "../../constants/index.jsx";
import { FaArrowRight } from "react-icons/fa6";

export default function Projects() {
  return (
    <div className="max-w-global mx-auto space-y-8">
      {PROJECTS.map((data, index) => (
        <div className="md:relative rounded-4xl overflow-hidden" key={index}>
          <img src={data.image} className="w-full aspect-video object-cover scale-165 -translate-x-2/9 md:scale-100 md:translate-x-0" />
          <div className="blury p-4 md:absolute md:left-4 md:top-4 md:bottom-4 md:w-2/7 md:rounded-3xl md:flex md:flex-col md:justify-center">
            <div className="flex gap-x-2 md:flex-col items-center md:items-start">
              <h3 className="font-bold lg:text-xl">{data.title}</h3>
              <p className="font-semibold text-neutral-400 text-xs lg:text-base">({data.year})</p>
            </div>
            <p className="text-sm lg:text-base text-neutral-400 mt-2 md:mt-16">{data.description}</p>
            <div className="flex justify-between items-center md:flex-col md:items-start  mt-6 ">
              <div className="flex gap-3 text-lg lg:text-xl">
                {data.technologies.map((tech, index) => (
                  <span className="" key={index}>
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={data.link}
                className="group h-12 lg:h-14 flex items-center gap-4 blury rounded-full text-xs max-w-40 lg:text-sm pl-5 pr-1 md:mt-8 hover:max-w-48 text-nowrap transition-all ease-out"
                target="_blank"
              >
                View website
                <div className="rounded-full p-0 blury opacity-0 -translate-x-2 max-w-0 group-hover:opacity-100 group-hover:p-2.5 lg:group-hover:p-3.5 group-hover:max-w-16 group-active:opacity-100 group-hover:translate-x-0 group-active:translate-x-0 transition">
                  <FaArrowRight className="text-xl text-accent" />
                </div>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
