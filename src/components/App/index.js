import React, { Component } from 'react';
import './styles.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moods: []
    };
  }

  render() {
    return <div className="page" />;
  }
}

export default App;
