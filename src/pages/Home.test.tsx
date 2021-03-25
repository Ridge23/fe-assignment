import React from 'react';
import { shallow } from 'enzyme';

import Home from './Home';
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
            },
            {
                id: 2,
                title: 'test_data_1',
                description: 'test_description_1',
                promocode: 'test_promocode_1',
                isActive: true
            },
        ]

        const component = shallow(<Home 
            services={services}
            getServices={handleFetchServices} 
            setServiceActive={hadnleSetServiceActive}
        />
        );

        expect(component.find('ServiceListItem').length).toBe(2);

        expect(component).toMatchSnapshot();
    });
});