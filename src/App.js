import React, { Component } from 'react';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Experience from './components/Experience';
import Skills from './components/Skills';

class App extends Component {
  constructor() {
    super();
    this.state = {};
    this.navigate = this.navigate.bind(this);
  }

  navigate(e, section) {
    this.refs[section].scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  render() {
    return (
      <div>
        <Navbar />
        <Main />
        <Projects name="projects" />
        <Skills />
        <Experience />
      </div>
    );
  }
}

export default App;
