import React, { Component } from 'react';
import './styles.scss';
import { Route, Switch, Redirect } from 'react-router-dom';
import Calendar from '../Calendar';
import Editor from '../Editor';
import MoodPage from '../MoodPage';
import { isSupported } from '../utils/localStorage';
import { isDate } from '../utils/dateFunctions';
import { isDateBeforeToday } from '../utils/dateFunctions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moods: [],
      newMood: { mood: 'good', message: '', date: '' },
      errorMessage: ''
    };
    // this.cancelEdit = this.cancelEdit.bind(this);
    this.onSubmitNewMood = this.onSubmitNewMood.bind(this);
    this.initialNewMood = this.initialNewMood.bind(this);
  }

  componentDidMount() {
    if (isSupported(window.localStorage)) {
      const storageData = JSON.parse(localStorage.getItem('moods'));
      if (storageData) {
        this.setState({ moods: storageData });
      }
    }
  }

  changeInputValue = property => ({ target: { value } }) => {
    console.log('value', value);

    this.setState(prevState => {
      if (property === 'mood' && value === 'bad') {
        return { newMood: { ...prevState.newMood, [property]: value, message: '' } };
      }
      return { newMood: { ...prevState.newMood, [property]: value } };
    });
  };

  // cancelEdit() {
  //   this.setState(prevState => {
  //     return { newMood: { ...prevState.newMood, mood: 'good', message: '' } };
  //   });
  // }

  initialNewMood() {
    this.setState({ newMood: { mood: 'good', message: '', date: '' } });
  }

  onSubmitNewMood() {
    const { date } = this.state.newMood;
    console.log('in subtim');

    if (!isDate(date) || !date) {
      console.log('in not date or empty');

      this.setState({ errorMessage: 'You need to provide a valid date.' });
      return;
    }
    if (!isDateBeforeToday(date)) {
      console.log('in date in the future');

      this.setState({ errorMessage: "You need to provide a date from the past or today's date." });
      return;
    }

    const { newMood, moods } = this.state;
    if (moods.includes(mood => mood.date === newMood.date)) {
      this.setState({ errorMessage: 'You already provided your mood for the selected date, you can not change it.' });
      return;
    }
    this.setState({ moods: [...moods, newMood] }, () => {
      localStorage.setItem('moods', JSON.stringify(this.state.moods));
      this.initialNewMood();
    });
  }

  render() {
    const {
      moods,
      newMood: { mood, message, date },
      errorMessage
    } = this.state;
    return (
      <div className="page">
        <Switch>
          <Route exact path="/calendar" render={() => <Calendar moods={moods} />} />
          <Route path="/editor" render={() => <Editor currentMood={mood} changeInputValue={this.changeInputValue} initialNewMood={this.initialNewMood} message={message} onSubmitNewMood={this.onSubmitNewMood} date={date} errorMessage={errorMessage} />} />
          <Route path="/mood/:id" render={routerProps => <MoodPage date={routerProps.match.params.id} moods={moods} />} />
          <Redirect from="/" to="/editor" />
        </Switch>
      </div>
    );
  }
}

export default App;
