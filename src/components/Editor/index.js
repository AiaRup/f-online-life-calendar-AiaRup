import React from 'react';
import './styles.scss';
import Smiley from '../Smiley';
import { Link } from 'react-router-dom';

export default function Editor({ changeInputValue, currentMood, initialNewMood, message, onSubmitNewMood, errorMessage }) {
  return (
    <div className="page__editor">
      <form>
        <fieldset className="editor__fieldset">
          <legend className="editor__legent">date</legend>
          <div>
            <label htmlFor="date" className="editor__label">
              date
            </label>
            <input
              type="date"
              id="date"
              name="mood__date"
              max={new Date()
                .toJSON()
                .slice(0, 10)
                .replace('/', '-')}
              className="editor__input"
              placeholder="&#xf133;"
              onChange={changeInputValue('date')}
            />
          </div>
        </fieldset>
        <fieldset className="editor__fieldset">
          <legend className="editor__legent">mood</legend>
          <div className="form__mood-container">
            <div className="radio__mood">
              <label htmlFor="good" className="label__mood">
                <input id="good" type="radio" value="good" name="mood" onChange={changeInputValue('mood')} checked={currentMood === 'good'} />
                <Smiley mood="good" />
              </label>
            </div>
            <div className="radio__mood">
              <label htmlFor="bad" className="label__mood">
                <input id="bad" type="radio" value="bad" name="mood" onChange={changeInputValue('mood')} checked={currentMood === 'bad'} />
                <Smiley mood="bad" />
              </label>
            </div>
          </div>
        </fieldset>

        {currentMood === 'good' ? (
          <fieldset className="editor__fieldset">
            <legend className="editor__legent">message</legend>
            <div>
              <label htmlFor="message" className="editor__label">
                message
              </label>
              <input id="message" type="text" name="message" placeholder="Why are you in a good mood?" className="editor__input" value={message} onChange={changeInputValue('message')} />
            </div>
          </fieldset>
        ) : null}
        <fieldset className="editor__fieldset buttons">
          <Link to="/calendar" className="form__button submit__button" onClick={onSubmitNewMood}>
            save
          </Link>
          <Link to="/calendar" className="form__button cancel__button" onClick={initialNewMood}>
            cancel
          </Link>
        </fieldset>
      </form>
      {errorMessage ? <p className="form__error">{errorMessage}</p> : null}
    </div>
  );
}
