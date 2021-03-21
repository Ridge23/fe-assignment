import apiCallerService, { IApiCallerService} from './ApiCallerService';

/**
 * Adds an apiCaller property to children classes, which is singleton.
 */
 abstract class ServiceAbstract {
    /**
     * @param {ApiCallerService}
     */
    apiCaller: IApiCallerService;

    constructor() {
        this.apiCaller = apiCallerService;
    }
}

export default ServiceAbstract;
