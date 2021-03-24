import 'jsdom-global/register';
import React from 'react';
import { mount } from 'enzyme';

import Filter from './Filter';
import InputText from '../form/InputText'
import Button from '../form/Button';

describe('Filter', () => {
    it('should render correctly', () => {
        const component = mount(<Filter handleChange={()=>{}} />);
        
        expect(component.childAt(0).hasClass('filter')).toBe(true);
        expect(component.contains(<input type="text" />));
        expect(component.contains(<InputText value='' onChange={() => {}} />));
        expect(component.contains(<Button caption='Reset' onClick={() => {}} />));

        expect(component).toMatchSnapshot();
    });
});