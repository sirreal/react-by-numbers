/** @format */

import React from 'react';

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
