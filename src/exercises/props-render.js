/** @format */

import React from 'react';

/**
 * Este componente va a recibir props.
 *
 * Has que el prop `subTitle` sea el contenido en texto.
 */
export class PropsRenderExercise extends React.Component {
  render() {
    return <p>{this.props.subTitle}</p>;
  }
}

/**
 *
 * ***************
 * ***************
 * No toques esto!
 * ***************
 * ***************
 *
 */
export default () => (
  <PropsRenderExercise subTitle="Si vemos este subtítulo, éxito!" />
);
