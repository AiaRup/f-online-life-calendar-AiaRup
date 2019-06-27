import React, { Component } from 'react';
import './styles.scss';
import { Route, Switch } from 'react-router-dom';
import Calendar from '../Calendar';
import Editor from '../Editor';
import MoodPage from '../MoodPage';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moods: []
    };
  }

  render() {
    const { moods } = this.state;
    return (
      <div className="page">
        <Switch>
          <Route exact path="/" component={Calendar} />
          <Route path="/editor" component={Editor} />
          <Route path="/mood/:id" render={routerProps => <MoodPage date={routerProps.match.params.id} moods={moods} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
