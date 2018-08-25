import React, { Component } from 'react';
const Scroll = require('react-scroll');
const Element = Scroll.Element;

class Main extends Component {
  constructor() {
    super();
    this.state = {
      cubeView: 'radio-front'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      cubeView: e.target.id
    });
  }

  handleClick(next) {
    this.setState({ cubeView: next });
  }

  render() {
    return (
      <section className="main">
        <Element name="dk" />
        <div className="scene">
          <div className={`cube-${this.state.cubeView}`}>
            <div
              onClick={() => this.handleClick('radio-right')}
              className="cube-face  cube-face-front"
            />
            <div
              onClick={() => this.handleClick('radio-back')}
              className="cube-face  cube-face-right"
            >
              <a href="https://linkedin.com/in/dankim111">
                <img className="li-image" src="linkedin.png" alt="cube" />
              </a>
            </div>
            <div
              onClick={() => this.handleClick('radio-left')}
              className="cube-face  cube-face-back"
            >
              <a href="https://github.com/danielkjm">
                <img className="cube-gh" src="octoliberty.png" alt="cube" />
              </a>
            </div>
            <div
              onClick={() => this.handleClick('radio-top')}
              className="cube-face  cube-face-left"
            >
              <a href="https://medium.com/@dkdan94">
                <img className="md-image" src="medium.png" alt="cube" />
              </a>
            </div>
            <div
              onClick={() => this.handleClick('radio-bottom')}
              className="cube-face  cube-face-top"
            >
              <div id="cube-text-top">Thanks...</div>
            </div>
            <div
              onClick={() => this.handleClick('radio-front')}
              className="cube-face  cube-face-bottom"
            >
              <div id="cube-text-bot">For Visiting!</div>
            </div>
          </div>
        </div>

        <div className="radio-container">
          <input
            className="radio-position"
            type="radio"
            id="radio-front"
            name="select-face"
            onChange={this.handleChange}
            defaultChecked
          />
          <input
            className="radio-position"
            type="radio"
            id="radio-right"
            name="select-face"
            checked={this.state.cubeView === 'radio-right'}
            onChange={this.handleChange}
          />
          <input
            className="radio-position"
            type="radio"
            id="radio-back"
            name="select-face"
            checked={this.state.cubeView === 'radio-back'}
            onChange={this.handleChange}
          />
          <input
            className="radio-position"
            type="radio"
            id="radio-left"
            name="select-face"
            checked={this.state.cubeView === 'radio-left'}
            onChange={this.handleChange}
          />
          <input
            className="radio-position"
            type="radio"
            id="radio-top"
            name="select-face"
            checked={this.state.cubeView === 'radio-top'}
            onChange={this.handleChange}
          />
          <input
            className="radio-position"
            type="radio"
            id="radio-bottom"
            name="select-face"
            checked={this.state.cubeView === 'radio-bottom'}
            onChange={this.handleChange}
          />
        </div>
      </section>
    );
  }
}

export default Main;
