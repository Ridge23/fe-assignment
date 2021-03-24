import React from 'react';
import { shallow } from 'enzyme';

import Footer from './Footer';

describe('Footer', () => {
  it('should render correctly', () => {
    const component = shallow(<Footer />);
    const currentYear = new Date().getFullYear();

    expect(component).toMatchSnapshot();
    expect(component.text()).toContain('IT Promocodes, ' + currentYear);
    expect(component.hasClass('footer')).toBe(true);
  });
});