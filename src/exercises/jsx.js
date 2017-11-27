/** @format */

import React from 'react';

/**
 * Simplemente escribe JSX dentro de este componente
 *
 * Basta con poner un poco de HTML!
 */
export default class JsxExercise extends React.Component {
  render() {
    return (
      <section>
        <header>
          <h1>Esto es JSX!</h1>
        </header>
        <div>
          <p>
            Fácil{' '}
            <span aria-label="fuerza" role="img">
              💪
            </span>
          </p>
        </div>
      </section>
    );
  }
}
