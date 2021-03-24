import React from 'react';
import { shallow, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Footer from './Footer';

describe('Footer', () => {
  it('should render correctly', () => {
    const component = shallow(<Footer />);
    const currentYear = new Date().getFullYear();

    expect(component).toMatchSnapshot();
    expect(component.text()).toContain('IT Promocodes, ' + currentYear);
  });
});