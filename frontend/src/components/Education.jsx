import React from 'react';
import styled from 'styled-components';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { education } from '../constants';
import { FaGraduationCap, FaSchool, FaUniversity } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 20px 0 40px 0;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;


const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 10px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 8px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 4px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const TimelineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
`;

const Institution = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-left: 12px;
  color: ${({ theme }) => theme.text_primary};
`;

const Degree = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 6px;
`;

const Duration = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text_tertiary};
`;

const Details = styled.p`
  font-size: 14px;
  margin-top: 6px;
  color: ${({ theme }) => theme.text_accent};
`;

const getIcon = (degree) => {
  if (degree.includes('Bachelor')) return <FaUniversity size={24} color="#854CE6" />;
  if (degree.includes('Intermediate')) return <FaSchool size={24} color="#A65EEA" />;
  return <FaGraduationCap size={24} color="#854CE6" />;
};

const Education = () => {
  return (
    <Container id="education">
        <Title>Education</Title>
        <Desc>My academic background and educational journey.</Desc>
        <TimelineSection>
          <Timeline>
            {education.map((edu, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary">
                    {getIcon(edu.degree)}
                  </TimelineDot>
                  {index !== education.length - 1 && (
                    <TimelineConnector style={{ background: '#854CE6' }} />
                  )}
                </TimelineSeparator>
                <TimelineContent sx={{ py: '10px', px: 2 }}>
                  <Card>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      {getIcon(edu.degree)}
                      <Institution>{edu.institution}</Institution>
                    </div>
                    <Degree>{edu.degree}</Degree>
                    <Duration>{edu.duration}</Duration>
                    {/* <Details>{edu.details}</Details> */}
                  </Card>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineSection>
    </Container>
  );
};

export default Education;
