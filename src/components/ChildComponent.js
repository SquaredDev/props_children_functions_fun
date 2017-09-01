import React, { Component } from 'react';

class ChildComponent extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <br/>
        <div>
          <input type="submit" onClick={this.props.onClick}/>
        </div>
        <h1>State, Props, Children, Function, Fun!</h1>
      </div>
    );
  }
}

export default ChildComponent
