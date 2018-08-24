import React, { Component } from 'react';
import { scroller } from 'react-scroll';

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      checked: false
    };
    this.navigate = this.navigate.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  navigate(section) {
    // console.log(section);
    // this.refs[section].scrollIntoView({ behavior: 'smooth', block: 'start' });
    scroller.scrollTo(section, {
      duration: 300,
      delay: 0,
      offset: -71,
      smooth: 'linear'
    });
  }

  handleClick() {
    this.setState({ checked: true });
  }

  render() {
    return (
      <nav className="navbar">
        <div className="navlogo">
          <a id="logo" onClick={e => this.navigate('dk')}>
            DK
          </a>
        </div>
        <div className="navlinks">
          <a className="linkP" onClick={e => this.navigate('projects')}>
            PROJECTS
          </a>
          <a className="linkE" onClick={e => this.navigate('experience')}>
            EXPERIENCE
          </a>
          <a className="linkS" onClick={e => this.navigate('skills')}>
            SKILLS
          </a>
        </div>

        <div id="menuToggle" onClick={this.handleClick}>
          <input type="checkbox" />
          <span />
          <span />
          <span />
          <ul id="menu">
            <a className="linkP" onClick={e => this.navigate('projects')}>
              <li>PROJECTS</li>
            </a>
            <a className="linkE" onClick={e => this.navigate('experience')}>
              <li>EXPERIENCE</li>
            </a>
            <a className="linkS" onClick={e => this.navigate('skills')}>
              <li>SKILLS</li>
            </a>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
