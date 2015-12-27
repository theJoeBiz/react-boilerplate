import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import HelloWorld from './components/HelloWorld';

class App extends Component {
  render() {
    return (
      <div>
        <HelloWorld />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));