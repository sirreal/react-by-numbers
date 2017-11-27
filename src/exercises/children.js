/** @format */

import React from 'react';

/**
 * Este componente debe:
 *
 * Renderizar sus "children" dentro de esta estructura:
 *
 * section > div > p
 *
 */
export default class ChildrenExercise extends React.Component {
  render() {
    return (
      <section>
        <div>
          <p>{this.props.children}</p>
        </div>
      </section>
    );
  }
}
