import React from 'react';
import Selfie from '../../assets/images/profilepicture.jpeg';

const Home = () => {
  return (
    <section className="home my-5">
      <div className="title">
        <h1>Full Stack Web Developer</h1>
        <p>Hello, my name is Victor Manuel Soto. I recently graduated from Columbia University's Full Stack Web Development bootcamp program and received my certificate of completion. Based in New York, NY; I am a dedicated, detail-oriented Software Developer who enjoys learning, researching, and writing code. I am excited about the opportunity to apply my programming skills and experience to a company where I can continue to learn and grow as a professional software developer.</p>
      </div>
      <div className="selfie portrait">
        <img src={Selfie} alt="self portrait" />
      </div>
    </section>
  );
};

export default Home;