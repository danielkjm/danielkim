import React, { Component } from 'react';

const Scroll = require('react-scroll');
const Element = Scroll.Element;

class Experience extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <section className="sectionDivider">
        <Element name="experience" />
        <div className="section-title">
          <h1 className="experienceHeader">.ECNEIREPXE</h1>
        </div>

        <ul className="timeline">
          <li className="timeline-inverted">
            <div className="timeline-badge" />
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>FULLSTACK ACADEMY</h4>
              </div>
              <div className="timeline-body">
                <p className="timeline-description">
                  I decided to merge my political science background with my
                  love for building exciting projects. I enrolled in Fullstack
                  Academy to begin my software engineering career and became
                  proficient with Node, Express, React, and PostgreSQL. I have
                  loved the journey of software development since.
                </p>
                <img src="FSA.png" className="timeline-image" alt="timeline" />
              </div>
            </div>
            <div className="timeline-date">
              <div className="text-muted-inverted">2018</div>
            </div>
          </li>

          <li className="timeline-inverted">
            <div className="timeline-badge" />
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>PORTNOFF LAW ASSOCIATES</h4>
              </div>
              <div className="timeline-body">
                <p className="timeline-description">
                  I accepted my first full-time job as a Legal Assistant in 2016
                  at Portnoff Law Associates. At PLA, I learned about the
                  nuances of tax collection in Pennsylvania as I prepared
                  pleadings for the Firm's attorneys in the collection of
                  delinquent real estate taxes and municipal fees.
                </p>
                <img
                  src="portnoff.png"
                  className="timeline-image"
                  alt="timeline"
                />
              </div>
            </div>

            <div className="text-muted-inverted">2016</div>
          </li>

          <li className="timeline-inverted">
            <div className="timeline-badge" />
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>LEHIGH UNIVERSITY</h4>
              </div>
              <div className="timeline-body">
                <p className="timeline-description">
                  I graduated from Lehigh University in 2016 with a BA in
                  Political Science.
                </p>
                <img
                  src="lehigh.jpg"
                  className="timeline-image"
                  alt="timeline"
                />
              </div>
            </div>
            <div className="text-muted-inverted" />
          </li>

          <li className="timeline-inverted">
            <div className="timeline-badge" />
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>LEHIGH COUNTY COURT OF COMMON PLEAS</h4>
              </div>
              <div className="timeline-body">
                <p className="timeline-description">
                  While at Lehigh University, I interned at the Lehigh County
                  Courthouse from September to December. Here I received my
                  first taste of a legal career, composing summary briefs for
                  civil cases on tort, contract and property law.
                </p>

                <img
                  src="lehighCourt.jpg"
                  className="timeline-image"
                  alt="timeline"
                />
              </div>
            </div>
            <div className="text-muted-inverted">2015</div>
          </li>
        </ul>
      </section>
    );
  }
}

export default Experience;
