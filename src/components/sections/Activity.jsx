import { EXPERIENCES } from "@/constants";

const Activity = () => {
  return (
    <div className="max-w-global mx-auto">
      {EXPERIENCES.map((experience, index) => (
        <div key={index} className="mb-8 flex flex-wrap justify-center">
          <div className="w-full max-w-xl lg:w-1/4">
            <p className="mb-2 text-sm xl:text-lg text-neutral-400">{experience.year}</p>
          </div>
          <div className="w-full max-w-xl lg:w-3/4">
            <p className="mb-2 text-sm xl:text-lg font-semibold">
              {experience.role} - {""}
              <span className="text-sm xl:text-base text-purple-100">{experience.company}</span>
            </p>
            <p className="mb-4 text-neutral-400">{experience.description}</p>
            {experience.technologies.map((tech, index) => (
              <span key={index} className="mr-2 mt-4 rounded-lg inline-block  px-2 py-1 text-sm font-medium  blury-sm text-accent">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Activity;
