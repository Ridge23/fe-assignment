import React from 'react';
import { shallow } from 'enzyme';

import Layout from './Layout';

describe('Layout', () => {
    it('should render correctly', () => {
        const component = shallow(<Layout title='test_title'>test_content</Layout>);
        const heading = component.find('.layout__content-title');
        const contentContainer = component.find('.layout-content-container');

        expect(heading.text()).toEqual('test_title');
        expect(contentContainer.text()).toEqual('test_content');

        expect(component).toMatchSnapshot();
    });
});