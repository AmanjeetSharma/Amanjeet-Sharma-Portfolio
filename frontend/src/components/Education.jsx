import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { education } from '../constants';
import { FaGraduationCap, FaSchool, FaUniversity } from 'react-icons/fa';

const getIcon = (degree) => {
  if (degree.includes('Bachelor')) return <FaUniversity className="w-6 h-6 text-purple-600" />;
  if (degree.includes('Intermediate')) return <FaSchool className="w-6 h-6 text-purple-500" />;
  return <FaGraduationCap className="w-6 h-6 text-purple-600" />;
};

const Education = () => {
  return (
    <div 
      id="education"
      className="flex flex-col relative z-10 items-center justify-center py-5 px-0 sm:py-10 sm:px-12"
    >
      <h1 className="text-4xl my-3 sm:text-5xl text-center font-semibold mt-2 text-gray-900 gradient-text">
        Education
      </h1>
      <p className="text-md sm:text-xl text-center max-w-2xl text-gray-300 dark:text-gray-300 mt-1">
        My academic background and educational journey.
      </p>
      
      <div className="w-full max-w-5xl mt-4 flex flex-col items-center justify-center gap-3">
        <Timeline position="alternate" className="w-full">
          {education.map((edu, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="secondary">
                  {getIcon(edu.degree)}
                </TimelineDot>
                {index !== education.length - 1 && (
                  <TimelineConnector className="bg-purple-600" />
                )}
              </TimelineSeparator>
              <TimelineContent className="py-2 px-1 sm:px-2">
                <div className="bg-slate-800  backdrop-blur-lg rounded-xl border border-white shadow-lg p-5 w-full">
                  <div className="flex items-center flex-wrap">
                    {getIcon(edu.degree)}
                    <h3 className="text-xl font-semibold ml-3 text-white ">
                      {edu.institution}
                    </h3>
                  </div>
                  <p className="text-base mt-1 text-white/80 ">
                    {edu.degree}
                  </p>
                  <p className="text-sm text-gray-500 ">
                    {edu.duration}
                  </p>
                </div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </div>
  );
};

export default Education;