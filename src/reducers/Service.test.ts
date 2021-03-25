import reducer, { IServiceState, IService } from './Service';

const initState: IServiceState = {
    services: [],
    isFetching: false,
    errorCode: 0,
}

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

describe('services reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            initState
        )
    });

    it('should handle REQUEST_SERVICES', () => {
        expect(
            reducer(initState, { type: 'REQUEST_SERVICES' })
        ).toEqual(
            {
                services: [],
                isFetching: true,
                errorCode: 0,
            }
        )
    });

    it('should handle RECEIVE_SERVICES', () => {
        expect(
            reducer(initState, { type: 'RECEIVE_SERVICES', services })
        ).toEqual(
            {
                services: services,
                isFetching: false,
                errorCode: 0,
            }
        )
    });
});