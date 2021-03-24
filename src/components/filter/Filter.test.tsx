import React from 'react';
import { shallow } from 'enzyme';

import Filter from './Filter';
import InputText from '../form/InputText'
import Button from '../form/Button';

describe('Filter', () => {
    it('should render correctly', () => {
        const component = shallow(<Filter handleChange={()=>{}} />);
        
        expect(component.hasClass('filter')).toBe(true);
        expect(component.contains(<input type="text" />));
        expect(component.contains(<InputText value='' onChange={() => {}} />));
        expect(component.contains(<Button caption='Reset' onClick={() => {}} />));

        expect(component).toMatchSnapshot();
    });
});