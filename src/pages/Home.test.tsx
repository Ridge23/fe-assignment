import React from 'react';
import { shallow } from 'enzyme';

import Home from './Home';
import Filter from '../components/Filter/Filter';
import ServiceListItem from '../components/services/ServiceListItem';
import { IService } from 'reducers/Service';

const handleFetchServices = jest.fn();
const hadnleSetServiceActive = jest.fn();

describe('Home', () => {
    it('should render correctly with data', () => {
        const services: IService[] = [
            {
                id: 1,
                title: 'test_data',
                description: 'test_description',
                promocode: 'test_promocode',
                isActive: false
            }
        ]

        const component = shallow(<Home 
            services={services}
            getServices={handleFetchServices} 
            setServiceActive={hadnleSetServiceActive}
        />
        );

        expect(component.contains(<ServiceListItem {...services[0]} onClick={()=>{}} />)).toBe(false);

        expect(component).toMatchSnapshot();
    });
});