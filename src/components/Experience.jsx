import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { careerImpact } from "../constants"; // Adjust path as needed


import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {

  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <p className="text-gray-400 text-[18px] uppercase tracking-wider text-center">
  What I have done so far
</p>
<h2 className="text-white font-bold text-[32px] sm:text-[40px] md:text-[70px] text-center">
  Work Experience.
</h2>

      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
      <div className="flex-1">
          <h2 className="text-3xl font-bold text-white">Career Impact</h2>
          {careerImpact.map((impact, index) => (
            <div key={index} className="mt-6 p-6 bg-gray-800 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-white">{impact.title}</h3>
              <ul className="mt-3 text-gray-300 list-disc list-inside">
                {impact.points.map((point, i) => (
                  <li key={i} className="mt-2">{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
