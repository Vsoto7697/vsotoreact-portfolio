import React from 'react';
import Resume from '../../assets/images/';

const MyResume = () => {
  return (
    <section className="about">
      <h1 id="about">Resume</h1>
      <img src={Resume} className="resume" alt="Victor Soto Resume" />
    </section>
  );
};

export default MyResume;