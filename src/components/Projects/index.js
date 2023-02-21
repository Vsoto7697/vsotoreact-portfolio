import React from 'react';

import Fetch from '../../assets/images/fetchwebsitescreenshot.png';
import ReadmeGenerator from '../../assets/images/readmegeneratorwebsitescreenshot.jpeg';
import CodingQuiz from '../../assets/images/codingquizwebsitescreenshot.jpeg';
import WeatherApp from '../../assets/images/serversideapiweatherappwebsitescreenshot.jpeg';
import GititDone from '../../assets/images/gititdonewebsitescreenshot.jpeg';

const Projects = () => {
  return (
    <section className="portfolio">
      <div>
        <h1 className="projects">My Projects</h1>
        <div className="row">

        <div className="col">
            <div className="card">
              <img src={ReadmeGenerator} alt="Readme Generator" className="card-img-top" />
              Readme Generator

              <div className='card-text'>This application allows user to automatically generate a README without having to create one from scratch. Just answer a few questions and watch how the README is automatically generated.</div>
              <div className='card-language'>Technologies: Node.js </div>

              <div className="card-body">
                <a
                  href="https://github.com/Vsoto7697/Readme-generator"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>GitHub</button>
                </a>
                <a
                  href="https://www.youtube.com/watch?v=8CzK2e7-We8"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Website</button>
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img src={Fetch} alt="Fetch" className="card-img-top" />
              Fetch

              <div className='card-text'>Welcome to Fetch! A grooming service that will connect you to the best fit groomer for your lovable best friend!</div>
              <div className='card-language'>Technologies: JavaScript,HTML, CSS, Web APIs, Third-Party APIs and Server-Side APIs </div>

              <div className="card-body">
                <a
                  href="https://github.com/awinters81/Project-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>GitHub</button>
                </a>
                <a
                  href="https://awinters81.github.io/Project-1/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Website</button>
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img
                src={CodingQuiz}
                alt="Coding Quiz Game"
                className="card-img-top"
              />
              Coding Quiz Game
              
              <div className='card-text'>A typical coding assessment consists of interactive coding challenges and multiple-choice questions.</div>
              <div className='card-language'>Technologies: JavaScript,HTML & CSS</div>

              <div className="card-body">
                <a
                  href="https://github.com/Vsoto7697/VsotoJSquiz"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>GitHub</button>
                </a>
                <a
                  href="https://vsoto7697.github.io/VsotoJSquiz/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Website</button>
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img
                src={WeatherApp}
                alt="Server Side API Weather App"
                className="card-img-top"
              />
              Server Side API Weather App

              <div className='card-text'>The weather dashboard is a browser-based application with dynamically updated HTML and CSS. To access both current and anticipated weather data, it makes use of Third-Party APIs provided by OpenWeather.com.</div>
              <div className='card-language'>Technologies: JavaScript,HTML, CSS and Server Side APIs</div>

              <div className="card-body">
                <a
                  href="https://github.com/Vsoto7697/Server-Side-API-Weather-App"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>GitHub</button>
                </a>
                <a
                  href="https://vsoto7697.github.io/Server-Side-API-Weather-App/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Website</button>
                </a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card">
              <img src={GititDone} alt="Git it Done" className="card-img-top" />
              Git it Done!

              <div className='card-text'>This project is a web application that searches for open-source projects with open issues and pull requests through the GitHub API.This application utilizes the program's Get Programming interface to speak with the server.</div>
              <div className='card-language'>Technologies: JavaScript,HTML, CSS, Model View Controller (MVC), Express and MySQL </div>

              <div className="card-body">
                <a
                  href="https://github.com/Vsoto7697/git-it-done"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>GitHub</button>
                </a>
                <a
                  href="https://vsoto7697.github.io/git-it-done/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>Website</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;