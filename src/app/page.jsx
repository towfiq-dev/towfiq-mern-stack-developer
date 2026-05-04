import React from 'react';
import Hero from '@/components/hero/Hero';
import GetTouch from '@/components/getTouch/GetTouch';
import WhatDo from '@/components/whatIDo/WhatDo';
import States from '@/components/states/States';
import ProjectSection from '@/components/projectsSection/projectCard/ProjectSection';
import TechStackHome from '@/components/techStackHome/TechStackHome';
import Contact from '@/components/contact/Contact';
import SocialLinks from '@/components/socialLinks/SocialLinks';
import Education from '@/components/education/Education';
import TrainingSection from '@/components/trainingSection/TrainingSection';

const Home = () => {
  return (
    <div>
      <Hero />
      <SocialLinks/>
      <States />
      <Education/>
      <TrainingSection/>
      <ProjectSection />
      <WhatDo />
      <TechStackHome />
      <GetTouch />
      <Contact/>
    </div>
  );
};

export default Home;
