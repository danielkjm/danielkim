import React, { Component } from 'react';

const Scroll = require('react-scroll');
const Element = Scroll.Element;

class Skills extends Component {
  constructor() {
    super();
    this.state = {
      jay: false,
      dan: false
    };
    this.expandRec = this.expandRec.bind(this);
  }

  expandRec(name) {
    let bool = this.state[name] ? false : true;
    this.setState({ [name]: bool });
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

        <div className="rec-box">
          <div className="rec">
            <img className="recJay" src="jay.jpg" alt="rec" />
            <div
              className="bubble triangle"
              onClick={() => this.expandRec('jay')}
            >
              {!this.state.jay
                ? 'I was working / studying with Daniel when we were in Fullstack Academy of Code. Daniel worked hard and always focused on core challenge on each workshop and problem that we encountered...'
                : 'I was working / studying with Daniel when we were in Fullstack Academy of Code. Daniel worked hard and always focused on core challenge on each workshop and problem that we encountered. Not only that he thought in positive way to encourage me and other teammates as well. He even spent and gave up weekends to do his portion of work and got it done when he was doing his capstone project during the course. He is absolutely one of the best person I met ever during Fullstack curriculum and I am sure that any team will have benefits when Dan joins.'}
            </div>
          </div>

          <div className="rec">
            <img className="recKerr" src="kerr.jpg" alt="rec" />
            <div
              className="bubble triangle"
              onClick={() => this.expandRec('dan')}
            >
              {!this.state.dan
                ? "The first thing you'll probably notice about Dan is that he's a cool guy. He is calm and composed and is a lot of fun to work with. He's always quick to support and treats absolutely everyone with respect..."
                : "The first thing you'll probably notice about Dan is that he's a cool guy. He is calm and composed and is a lot of fun to work with. He's always quick to support and treats absolutely everyone with respect and thoughtfulness. Once you get to know him, though, you'll notice more-- \n Mr. Kim is an excellent, excellent man. He handles every task assigned him with aplomb. He is creative and he is resourceful. He will see solutions from angles others never saw coming. Despite these, he is humble, and he is accepting. He will listen to you and he will never judge; his demeanor is always, always one of calm, mindful attention. Dan is patently expert at what he does; Dan is an unfailingly empowering teammate. Dan is excellent, and you'd be missing out to pass on this man."}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
