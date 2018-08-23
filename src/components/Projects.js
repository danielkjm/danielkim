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
        <Modal
          project={this.state.project}
          show={this.state.show}
          handleClose={this.hideModal}
        />
        <section ref="projects" className="sectionDivider">
          <h1 className="projectHeader">.STCEJORP</h1>
          <div id="projects">
            <div className="project-container">
              <img id="project1" src="gg.png" alt="project" />
              <p id="proj-text">
                An intuitive GUI for all git and github functionalities.
              </p>
              <a
                href="https://github.com/CapstoneGitGui/Github_gui"
                id="gh-image-proj-container"
              >
                <img
                  className="gh-image-proj-1"
                  src="original.png"
                  alt="project"
                />
              </a>
            </div>
            <div className="project-container">
              <img id="project2" src="shoe.png" alt="project" />
              <p>
                A pick-up basketball game app that serves as a social platform
                for basketball players and simplifies the search of finding
                local games.
              </p>
              <a href="https://github.com/FullstackBallerz/courtdude">
                <img
                  className="gh-image-proj-2"
                  src="original.png"
                  alt="project"
                />
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Projects;
