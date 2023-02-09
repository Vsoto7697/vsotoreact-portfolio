import React from 'react';
import Pdf from '../../assets/images/Victor Soto Resume 2022.docx.pdf';

const MyResume = () => {
  return (
    <section className="about">
      <div>
      <h1 id="about">Resume</h1>
      <a href = {Pdf}>Click here to View
      </a>

      </div>
      
      <div>
      <h2>Front-End Proficiencies</h2>
				<ol>
					<li>HTML5</li>
					<li>CSS3</li>
					<li>JavaScript</li>
					<li>jQuery</li>
					<li>Bootstrap</li>
					<li>React</li>
					<li>version control/Git</li> 
					<li>responsive design</li>
				</ol>
				<br></br>
				<h2>Back-End Proficiencies</h2>
				<ol>
					<li>APIs</li>
					<li>NodeJS</li>
					<li>Express</li>
					<li>Model View Controller (MVC)</li>
					<li>REST</li>
					<li>Progressive Web Applications (PWA)</li>
				</ol>
				<br></br>
				<h2>Dev Tool Proficiencies</h2>
				<ol>
					<li>Git</li>
					<li>NPM</li>
					<li>Jest</li>
					<li>Webpack</li>
				</ol>
				<br></br>
				<h2>Database Proficiencies</h2>
				<ol>
					<li>MySQL</li>
					<li>Sequelize</li>
					<li>NoSQL</li>
					<li>SQLite</li>
					<li>GraphQL</li>
					<li>MongoDB</li>
					<li>Mongoose</li>
				</ol>
      </div>

    </section>
  );
};

export default MyResume;