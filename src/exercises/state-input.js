/** @format */

import React from 'react';

/**
 * Este componente utiliza state
 *
 * Se debe
 *   * inicializar un contador en 0
 *   * crear un `<button>` que incremente la cuenta
 *   * renderizar la cuenta en un elemento cuyo id sea `clicks`
 *
 */
export default class StateInput extends React.Component {
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
