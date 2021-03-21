import servicesService from '../services/ServicesService';

function requestServices() {
    return {
        type: 'REQUEST_SERVICES',
    };
}

function receiveServices(services: object[]) {
    return {
        type: 'RECEIVE_SERVICES',
        services,
    };
}

function receiveServicesFailed(errorCode: number) {
    return {
        type: 'RECEIVE_SERVICES_FAILED',
        errorCode: errorCode,
    };
}

function fetchServices() {
    return (dispatch: any): Promise<void> => {
        dispatch(requestServices());

        return servicesService
            .getAll()
            .then(({ data }) => {
                dispatch(receiveServices(data));
            })
            .catch((error) => {
                dispatch(receiveServicesFailed(error.response.status));

                throw error;
            });
    };
}

export { fetchServices };