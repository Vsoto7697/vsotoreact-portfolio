import React from 'react';
import Selfie from '../../assets/images/profilepicture.jpeg';

const Home = () => {
  return (
    <section className="home my-5">
      <div className="title">
        <h2>Hi, I'm Victor.</h2>
        <p>Welcome to my Web Development Portfolio!</p>
      </div>
      <div className="selfie portrait">
        <img src={Selfie} alt="self portrait" />
      </div>
    </section>
  );
};

export default Home;