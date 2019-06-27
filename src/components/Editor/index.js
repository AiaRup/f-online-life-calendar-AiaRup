import React from 'react';
import './styles.scss';

export default function Editor() {
  return (
    <form>
      <form action="" method="post">
        <fieldset>
          <legend>date</legend>
          <div>
            <label for="date">Date</label>
            <input id="date" type="text" name="date" />
          </div>
        </fieldset>
        <fieldset>
          <legend>mood</legend>
          <div>
            <label for="good">
              <input id="good" type="radio" value="good" name="mood" />
              :)
            </label>
          </div>
          <div>
            <label for="bad">
              <input id="bad" type="radio" value="bad" name="mood" />
              :(
            </label>
          </div>
        </fieldset>

        <fieldset>
          <legend>mood</legend>
          <div>
            <label for="message">message</label>
            <input id="message" type="text" name="message" placeholder="Why are you in a good mood" />
          </div>
        </fieldset>
        <fieldset>
          <input type="submit" value="Save" />
          <button>Cancel</button>
        </fieldset>
      </form>
    </form>
  );
}
