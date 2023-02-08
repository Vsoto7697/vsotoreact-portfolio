import React from 'react';
import Selfie from '../../assets/images/vicandmaxselfie.jpeg';

const About = () => {
  return (
    <section className="about">
      <h1 id="about">About Me</h1>
      <p>
      Hello, my name is Victor Soto. I recently graduated from Columbia University's Full Stack Web Development bootcamp program and received my certificate of completion. I am currently residing in New York, NY. I am actively looking for work as a Junior Web Developer. Watching Baseball, collecting sneakers, playing video games, and hiking with my dog are some of my hobbies when I'm not creating websites.
      </p>
      <div className="aboutmephoto">
        <img src={Selfie} alt="self portrait" />
      </div>
      <p>
        
      </p>
      <p>
        
      </p>
      <p>
       
      </p>
      <p>
        
      </p>
    </section>
  );
};

export default About;