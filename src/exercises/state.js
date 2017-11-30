/** @format */

import React from 'react';
import withInstructions from '../with-instructions';

export class State extends React.Component {
  static instructions = `

/**
 * Este componente utiliza state
 *
 * Se debe
 *   * inicializar un contador en 0
 *   * crear un \`<button>\` que incremente la cuenta
 *   * renderizar la cuenta en un elemento cuyo id sea \`clicks\`
 *
 */
  `;

  state = { clicks: 0 };

  render() {
    return (
      <section>
        <header>
          <h1>State</h1>
          <div>
            <code id="clicks">{this.state.clicks}</code>
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

export default withInstructions(State);
