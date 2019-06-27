import React from 'react';
import './styles.scss';
import Smiley from '../Smiley';
import { Link } from 'react-router-dom';

export default function Calendar({ moods }) {
  return (
    <div className="page__calendar">
      <Link to="/editor" className="calendar__plus-button" />
      <ol className="mood__list">
        {moods.map(day => {
          return (
            <li className="mood__item" key={day.date}>
              <Link to={`/mood/${day.date}`} className="mood__link">
                <Smiley mood={day.mood} />
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
