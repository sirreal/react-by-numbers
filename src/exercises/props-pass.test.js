/** @format */

import React from 'react';
import { shallow } from 'enzyme';
import { PropsPass } from '.';

describe('PropsPass', () => {
  test('should pass a title prop', () => {
    const rendered = shallow(<PropsPass />);
    expect(rendered.prop('title')).not.toBeUndefined();
  });
});
