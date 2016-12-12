import React, { Component } from 'react';
import Svg, { Circle, Rect } from '../';
import ReactDOM from 'react-dom';

class SvgExample extends Component {
  render() {
    return (
      <Svg height="100" width="100">
        <Circle cx="50" cy="50" r="45" stroke="blue" strokeWidth="2.5" fill="green" />
        <Rect x="15" y="15" width="70" height="70" stroke="red" strokeWidth="2" fill="yellow" />
      </Svg>
    );
  }
}

ReactDOM.render(<SvgExample />, document.getElementById('example'));
