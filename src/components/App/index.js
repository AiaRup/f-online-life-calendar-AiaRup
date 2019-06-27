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
      moods: [{ mood: 'good', date: '01/01/2019' }, { mood: 'bad', date: '02/01/2019' }, { mood: 'good', date: '03/01/2019' }, { mood: 'good', date: '04/01/2019' }, { mood: 'bad', date: '05/01/2019' }]
    };
  }

  render() {
    const { moods } = this.state;
    return (
      <div className="page">
        <Switch>
          <Route exact path="/" render={() => <Calendar moods={moods} />} />
          <Route path="/editor" component={Editor} />
          <Route path="/mood/:id" render={routerProps => <MoodPage date={routerProps.match.params.id} moods={moods} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
