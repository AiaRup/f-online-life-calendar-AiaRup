import React from 'react';
import './styles.scss';
import Smiley from '../Smiley';

export default function Editor({ changeInputValue, currentMood, cancelEdit, message, onSubmitNewMood }) {
  return (
    <form className="page__editor">
      <fieldset className="editor__fieldset">
        <legend className="editor__legent">date</legend>
        <div>
          <label htmlFor="date" className="editor__label">
            Date
          </label>
          <input id="date" type="text" name="date" className="editor__input" />
        </div>
      </fieldset>
      <fieldset className="editor__fieldset">
        <legend className="editor__legent">mood</legend>
        <div className="form__mood-container">
          <div className="radio__mood">
            <label htmlFor="good" className="label__mood">
              <input id="good" type="radio" value="good" name="mood" onChange={changeInputValue('currentMood')} checked={currentMood === 'good'} />
              <Smiley mood="good" />
            </label>
          </div>
          <div className="radio__mood">
            <label htmlFor="bad" className="label__mood">
              <input id="bad" type="radio" value="bad" name="mood" onChange={changeInputValue('currentMood')} checked={currentMood === 'bad'} />
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
        <input type="submit" value="Save" className="form__button submit__button" onClick={onSubmitNewMood} />
        <button type="button" className="form__button cancel__button" onClick={cancelEdit}>
          Cancel
        </button>
      </fieldset>
    </form>
  );
}
