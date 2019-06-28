import React, { Component } from 'react';
import './styles.scss';
import { Route, Switch, Redirect } from 'react-router-dom';
import Calendar from '../Calendar';
import Editor from '../Editor';
import MoodPage from '../MoodPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moods: [{ mood: 'good', date: '01-01-2019' }, { mood: 'bad', date: '02-01-2019' }, { mood: 'good', date: '03-01-2019' }, { mood: 'good', date: '04-01-2019' }, { mood: 'bad', date: '05-01-2019' }],
      newMood: { currentMood: 'good', message: '', date: new Date().toJSON().slice(0, 10) }
    };
    this.cancelEdit = this.cancelEdit.bind(this);
    this.onSubmitNewMood = this.onSubmitNewMood.bind(this);
  }

  changeInputValue = property => ({ target: { value } }) => {
    this.setState(prevState => {
      return { newMood: { ...prevState.newMood, [property]: value } };
    });
  };

  cancelEdit() {
    this.setState(prevState => {
      return { newMood: { ...prevState.newMood, currentMood: 'good', message: '' } };
    });
  }

  onSubmitNewMood(event) {
    const { newMood, moods } = this.state;
    // validate that the date provided not in the mood list
    // if (moods.filter(mood => mood.date === date).length > 0 ) {

    // }
    this.setState({ moods: [...moods, newMood] });
  }

  render() {
    const {
      moods,
      newMood: { currentMood, message, date }
    } = this.state;
    return (
      <div className="page">
        <Switch>
          <Route exact path="/calendar" render={() => <Calendar moods={moods} />} />
          <Route path="/editor" render={() => <Editor currentMood={currentMood} changeInputValue={this.changeInputValue} cancelEdit={this.cancelEdit} message={message} onSubmitNewMood={this.onSubmitNewMood} date={date} />} />
          <Route path="/mood/:id" render={routerProps => <MoodPage date={routerProps.match.params.id} moods={moods} />} />
          <Redirect from="/" to="/editor" />
        </Switch>
      </div>
    );
  }
}

export default App;
