import React, { Component } from 'react';

const Scroll = require('react-scroll');
const Element = Scroll.Element;

class Skills extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <section className="sectionDivider">
        <Element name="skills" />
        <div className="section-title">
          <h1 className="skillsHeader">.SLLIKS</h1>
        </div>
        <div className="skills">
          <img className="skill" src="node.png" alt="skill" />
          <img className="skill" src="express.png" alt="skill" />
          <img className="skill" src="react.png" alt="skill" />
          <img className="skill" src="postgreSQL.png" alt="skill" />
        </div>
        <div className="bubbles">
          <div className="bubble triangle">
            "I was working / studying with Daniel when we were in Fullstack
            Academy of Code. Daniel worked hard and always focused on core
            challenge on each workshop and problem that we encountered...
          </div>
          <div className="bubble triangle">
            "The first thing you'll probably notice about Dan is that he's a
            cool guy. He is calm and composed and is a lot of fun to work with.
            He's always quick to support and treats absolutely everyone with
            respect and thoughtfulness. Once you get to know him, though, you'll
            notice more-- Mr. Kim is an...
          </div>
        </div>
        <div className="recBox">
          <img className="recJay" src="jay.jpg" alt="rec" />
          <img className="recKerr" src="kerr.jpg" alt="rec" />
        </div>
      </section>
    );
  }
}

export default Skills;
