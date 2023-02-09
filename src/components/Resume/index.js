import React from 'react';
import Pdf from '../../assets/images/Victor Soto Resume 2022.docx.pdf';

const MyResume = () => {
  return (
    <section className="about">
      <h1 id="about">Resume</h1>
      <a href = {Pdf}>Click here to view</a>
    </section>
  );
};

export default MyResume;