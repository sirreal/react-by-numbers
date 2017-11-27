/** @format */

import React from 'react';

/**
 * Haz un componente que pasa "title"
 * al componente PassMeATitleProp
 */
export default class PropsPassExercise extends React.Component {
  render() {
    return <PassMeATitleProp title="My Title" />;
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
class PassMeATitleProp extends React.Component {
  render() {
    return <h1>{this.props.title}</h1>;
  }
}
