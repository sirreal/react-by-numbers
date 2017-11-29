/** @format */

import React from 'react';

/**
 * Este componente crea un handler.
 *
 * Se debe
 *   * crear un método que loguea 'click' a la consola
 *   * crear un `<button>` que llama al susodicho método en su `onClick`
 *   * pasa el prop `type="button"` para que no sea del tipo `submit`
 *
 */
export default class EventHandlingExercise extends React.Component {
  handler = () => console.log('click');

  render() {
    return (
      <button type="button" onClick={this.handler}>
        click me
      </button>
    );
  }
}
