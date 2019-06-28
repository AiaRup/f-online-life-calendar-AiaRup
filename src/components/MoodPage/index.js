import React, { Fragment } from 'react';
import './styles.scss';
import Smiley from '../Smiley';
import { Link } from 'react-router-dom';

export default function MoodPage({ date, moods }) {
  const smiley = moods.find(moodItem => moodItem.date === date);

  return (
    <div className="mood__page">
      <Link to="/calendar" className="mood__page-back">
        back
      </Link>
      {smiley ? (
        <Fragment>
          <Smiley mood={smiley.mood} />
          <div className="smiley__date">{date}</div>
        </Fragment>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
