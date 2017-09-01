import React, { Component } from 'react';

class DisplayComponent extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <h3>{this.props.sayWhat}</h3>
      </div>
    );
  }
}

export default DisplayComponent
