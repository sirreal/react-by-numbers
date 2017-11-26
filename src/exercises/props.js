/** @format */

import React from 'react';

class PropsExercise extends React.Component {
  render() {
    return (
      <section>
        <header>
          <h1>Esto es JSX!</h1>
          <p>{this.props.subTitle}</p>
        </header>
      </section>
    );
  }
}

/**
 * No toques abajo.
 *
 * Esto sirve para pasar un prop a nuestro componente.
 */
export default class Props extends React.Component {
  render() {
    return <PropsExercise subTitle="Si vemos este subtítulo, éxito!" />;
  }
}
