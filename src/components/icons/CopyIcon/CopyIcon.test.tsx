import React from 'react';
import { shallow } from 'enzyme';

import CopyIcon from './CopyIcon'

describe('Footer', () => {
  it('should render correctly', () => {
    const component = shallow(<CopyIcon />);

    expect(component).toMatchSnapshot();
    expect(component.hasClass('copy-icon')).toBe(true);
  });
});