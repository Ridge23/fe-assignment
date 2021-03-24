import React from 'react';
import { shallow } from 'enzyme';

import LogoIcon from './LogoIcon'

describe('Footer', () => {
  it('should render correctly', () => {
    const component = shallow(<LogoIcon />);

    expect(component).toMatchSnapshot();
    expect(component.hasClass('logo-icon')).toBe(true);
  });
});