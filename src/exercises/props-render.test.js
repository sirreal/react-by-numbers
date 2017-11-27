/** @format */

import React from 'react';
import { render } from 'enzyme';
import { PropsRenderExercise } from './props-render';

describe('PropsRender', () => {
  test('should render pass props', () => {
    const passedString = 'passed string';
    const rendered = render(<PropsRenderExercise subTitle={passedString} />);
    expect(rendered.text()).toMatch(passedString);
  });
});
