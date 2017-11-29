/** @format */

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Este componente crea un handler.
 */
export class HandlerPassing extends React.Component {
  static propTypes = { hanlder: PropTypes.func };
  static defaultProps = { handler: () => {} };

  render() {
    return (
      <button type="button" onClick={this.props.handler}>
        Click to call the handler!
      </button>
    );
  }
}

/**
 * No toques!
 */
export default class extends React.Component {
  handler = () => alert('Button was clicked!');

  render() {
    return <HandlerPassing handler={this.handler} />;
  }
}
