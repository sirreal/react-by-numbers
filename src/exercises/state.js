/** @format */

import React from 'react';

export default class StateExercise extends React.Component {
  state = { clicks: 0 };

  render() {
    return (
      <section>
        <header>
          <h1>State</h1>
          <div>
            <code>{this.state.clicks}</code>
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
