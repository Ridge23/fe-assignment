import { IService, IServiceAction } from '../reducers/Service';
import servicesService from '../services/ServicesService';

function requestServices(): IServiceAction {
    return {
        type: 'REQUEST_SERVICES',
    };
}

function receiveServices(services: IService[]): IServiceAction {
    return {
        type: 'RECEIVE_SERVICES',
        services,
    };
}

function receiveServicesFailed(errorCode: number): IServiceAction {
    return {
        type: 'RECEIVE_SERVICES_FAILED',
        errorCode: errorCode,
    };
}

function setActive(id: number): IServiceAction {
    return {
        type: 'SET_SERVICE_ACTIVE',
        id
    }
}

/**
 * Filtering added here because usually backends retun much more data
 * and paginate it, thus backend should filter out the data wile fetching from
 * database and then paginate the result.
 * 
 * @param filterValue 
 * @returns 
 */
function fetchServices(filterValue: string = '') {
    return (dispatch: any): Promise<void> => {
        dispatch(requestServices());

        return servicesService
            .getAll()
            .then(({ data }) => {
                const filteredData = filterValue.length > 2 
                    ? data.filter((service: IService) => service.title.toLowerCase().includes(filterValue.toLowerCase()))
                    : data;
                dispatch(receiveServices(filteredData));
            })
            .catch((error) => {
                dispatch(receiveServicesFailed(error.response.status));

                throw error;
            });
    };
}

function setServiceActive(id: number) {
    return (dispatch: any): Promise<void> => {
        return servicesService
            .setActive(id)
            .then(() => {
                dispatch(setActive(id))
            });
    }
}

export { fetchServices, setServiceActive };