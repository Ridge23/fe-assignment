interface IService {
    id: number;
    title: string;
    description: string;
    promocode: string;
    isActive: boolean;
}
interface IServiceState {
    services: IService[];
    isFetching: boolean;
    errorCode?: number;
}

interface IServiceAction {
    type?: string;
    services?: IService[];
    errorCode?: number;
    id?: number;
}

const initState: IServiceState = {
    services: [],
    isFetching: false,
    errorCode: 0,
};

function Service(state = initState, action: IServiceAction): IServiceState {
    switch (action.type) {
        case 'SET_SERVICE_ACTIVE':
            return {
                ...state,
                services: state.services.map((service: IService) => {
                    if (service.id === action.id) {
                        return { ...service, isActive: true }
                    }
                    return service;
                })
            }
        case 'REQUEST_SERVICES':
            return {
                ...state,
                isFetching: true,
            }
        case 'RECEIVE_SERVICES':
            return {
                ...state,
                isFetching: false,
                services: action.services,
            }
        case 'RECEIVE_SERVICES_FAILED':
            return {
                ...state,
                isFetching: false,
                errorCode: action.errorCode,
            }
        default:
            return state;
    }
}

export { Service as default, IServiceState, IService, IServiceAction };