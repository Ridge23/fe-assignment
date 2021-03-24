import 'jsdom-global/register';
import React from 'react';
import { mount } from 'enzyme';

import Filter from './Filter';
import InputText from '../form/InputText'
import Button from '../form/Button';

const handleChange = jest.fn();

describe('Filter', () => {
    it('should render correctly', () => {
        const component = mount(<Filter handleChange={handleChange} />);
        
        expect(component.childAt(0).hasClass('filter')).toBe(true);
        expect(component.contains(<input type="text" />));
        expect(component.contains(<InputText value='' onChange={() => {}} />));
        expect(component.contains(<Button caption='Reset' onClick={() => {}} />));

        expect(component).toMatchSnapshot();

        const input = component.find('input.input-text');
        const button = component.find('button.button');
        input.simulate('change', { target: { value: 'He' } });
        input.simulate('change', { target: { value: 'llo' } });
        button.simulate('click');
        
        expect(handleChange).toHaveBeenCalledTimes(3);
    });
});