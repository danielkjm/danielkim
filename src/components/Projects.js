import React, { Component } from 'react';
import Modal from './Modal';
const Scroll = require('react-scroll');
const Element = Scroll.Element;

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      project: {}
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal(img, name, description) {
    this.setState({
      show: true,
      project: {
        name,
        img,
        description
      }
    });
  }

  hideModal() {
    this.setState({ show: false });
  }

  render() {
    return (
      <div>
        <Element name="projects" />
        <div className="sectionDivider" />
        <section ref="projects">
          <div className="section-title">
            <h1 className="projectHeader">.STCEJORP</h1>
          </div>
          <div className="projects">
            <div className="project-container">
              <div className="GitGUI">
                GitGUI
                <div className="under" />
              </div>

              <p id="proj-text">
                An intuitive GUI for all git and github functionalities.
              </p>
              <a
                href="https://github.com/CapstoneGitGui/Github_gui"
                id="gh-image-proj-container"
                target="_blank"
              >
                <div className="gh-image">
                  <img
                    className="gh-octocat"
                    src="original.png"
                    alt="project"
                  />
                </div>
              </a>
            </div>
            <div className="project-container">
              <div className="project-image">
                <img id="project2" src="shoe.png" alt="project" />
              </div>
              <p>
                A social platform for basketball players that simplifies the
                search of finding local games.
              </p>
              <a
                href="https://github.com/FullstackBallerz/courtdude"
                target="_blank"
              >
                <div className="gh-image">
                  <img
                    className="gh-octocat"
                    src="original.png"
                    alt="project"
                  />
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Projects;
