import React from 'react';
import AboutMe from '../components/aboutme';

const About = () => {
  return (
    <div>
      <AboutMe />
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">My Journey</h2>
          <p className="text-lg text-gray-700">
            I started my photography journey over 10 years ago, capturing moments that matter. My passion lies in telling
            stories through my lens and creating memories that last forever.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
