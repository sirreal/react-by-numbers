import React from 'react'
import {shallow} from 'enzyme';
import Jsx from './jsx'

describe( 'jsx', () => {
  test('should render jsx', () => {
    const rendered = shallow( <Jsx /> );
    expect( rendered.children().length ).toBeGreaterThan(0)
  });
})
