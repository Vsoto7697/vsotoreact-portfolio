import React from 'react';

import Fetch from '../../assets/images/jakob-owens-CiUR8zISX60-unsplash.jpg';
import ReadmeGenerator from '../../assets/images/intricate-explorer-Gt6D-s4M-04-unsplash.jpg';
import CodingQuiz from '../../assets/images/nguyen-dang-hoang-nhu-qDgTQOYk6B8-unsplash.jpg';
import WeatherApp from '../../assets/images/eden-constantino-bTukYI4DjOs-unsplash.jpg';
import GititDone from '../../assets/images/david-travis-5bYxXawHOQg-unsplash.jpg';

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
              Server Side API Weather app
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