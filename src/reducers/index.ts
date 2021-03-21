import { combineReducers } from 'redux';
import Service, { IServiceState } from './Service';

interface IState {
    Service: IServiceState
}

const rootReducer = combineReducers({
    Service
})

export {rootReducer as default, IState }