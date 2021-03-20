interface IService {
    id: number;
}

interface IServiceState {
    services: IService[];
}

interface IServiceAction {
    type: string;
}

const initState: IServiceState = {
    services: []
};

export default function Service(state = initState, action: IServiceAction): IServiceState {
    switch (action.type) {
        default:
            return state;
    }
}