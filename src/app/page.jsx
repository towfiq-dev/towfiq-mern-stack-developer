import Hero from '@/components/hero/Hero';
import GetTouch from '@/components/getTouch/GetTouch';
import WhatDo from '@/components/whatIDo/WhatDo';
import States from '@/components/states/States';
import ProjectSection from '@/components/projectSection/ProjectSection';
import React from 'react';
import TechStackHome from '@/components/techStackHome/TechStackHome';

const Home = () => {
  return (
    <div>
      <Hero/>
      <States/>
      <ProjectSection/>
      <WhatDo/>
      <TechStackHome/>
      <GetTouch/>
    </div>
  );
};

export default Home;