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
          <div className="timeline-date">
            <div className="text-muted-inverted">2018</div>
          </div>
          <li>
            <div className="timeline-panel-left">
              <img src="FSA.png" className="FSA-header" alt="timeline" />
              {/* <div className="timeline-heading">
                <h4>FULLSTACK ACADEMY</h4>
              </div> */}
              <div className="timeline-body">
                <p className="timeline-description">
                  I enrolled in Fullstack Academy to begin my software
                  engineering career. I gained experience in web development and
                  in building desktop and mobile applications.
                </p>
              </div>
            </div>
          </li>
          <div className="timeline-date">
            <div className="text-muted-inverted">2016</div>
          </div>
          <li className="timeline-inverted">
            <div className="timeline-panel">
              <img className="PLA-header" src="portnoff.png" alt="timeline" />
              <div className="timeline-body">
                <p className="timeline-description">
                  I accepted my first full-time job as a Legal Assistant in 2016
                  at Portnoff Law Associates. Here I learned about the nuances
                  of tax collection in Pennsylvania as I prepared pleadings for
                  the Firm's attorneys in the collection of delinquent real
                  estate taxes and municipal fees.
                </p>
              </div>
            </div>
          </li>

          <li>
            <div className="timeline-panel-left">
              <img src="lehigh.jpg" className="Lehigh-header" alt="timeline" />
              <div className="timeline-body">
                <p className="timeline-description">
                  I graduated from Lehigh University in 2016 with a B.A. in
                  Political Science.
                </p>
              </div>
            </div>
          </li>
          <div className="timeline-date">
            <div className="text-muted-inverted">2015</div>
          </div>

          <li className="timeline-inverted">
            <div className="timeline-panel">
              <div className="court">
                <img
                  src="lehighCourt.jpg"
                  className="timeline-image"
                  alt="timeline"
                />
                <div className="timeline-heading">
                  <h4>LEHIGH COUNTY COURT OF COMMON PLEAS</h4>
                </div>
              </div>

              <div className="timeline-body">
                <p className="timeline-description">
                  I interned here under the Honorable Douglas G. Reichley during
                  my senior year at Lehigh University. I composed summary briefs
                  for civil cases on tort, contract and property law.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section>
    );
  }
}

export default Experience;
