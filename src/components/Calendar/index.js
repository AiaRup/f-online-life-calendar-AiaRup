import React from 'react';
import './styles.scss';
import Smiley from '../Smiley';
import { Link } from 'react-router-dom';
import { sortDate } from '../utils/dateFunctions';

export default function Calendar({ moods }) {
  // const sortedMoods = moods.sort(sortDate);
  return (
    <div className="page__calendar">
      <Link to="/editor" className="calendar__plus-button">
        +
      </Link>
      <ol className="mood__list">
        {moods.sort(sortDate).map(day => {
          return (
            <li className="mood__item" key={day.date} title={day.date}>
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
