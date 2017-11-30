/** @format */

import React from 'react';
import withInstructions from '../with-instructions';

export class StateInput extends React.Component {
  static instructions = `
  to do
  `;

  state = { formInput: '', storedInput: '' };

  render() {
    return (
      <section>
        <header>
          <h1>State</h1>
          <div>
            <label htmlFor="stateInput" />
            <input type="text" />
          </div>
          <div>
            <button
              type="button"
              onClick={() =>
                this.setState(({ clicks }) => ({ clicks: clicks + 1 }))
              }
            >
              Click!
            </button>
          </div>
        </header>
      </section>
    );
  }
}

export default withInstructions(StateInput);
