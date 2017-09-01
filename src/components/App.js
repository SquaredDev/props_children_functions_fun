import React, { Component } from 'react';
import '../styles/App.css';
import BaseLayout from './BaseLayout';
import Header from './Header';
import ParentComponent from './ParentComponent'
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BaseLayout>
          <ParentComponent />
        </BaseLayout>
      </div>
    );
  }
}

export default App;
