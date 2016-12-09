import React, { Component } from 'react';

import TopBar from './TopBar';

import '../less/App.less';

class App extends Component {
  render() {
    return (
      <div className="god-container">
        <TopBar />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;