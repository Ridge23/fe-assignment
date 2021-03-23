import { AxiosPromise } from 'axios';

import { IService } from 'reducers/Service';

import ServiceAbstract from './ServiceAbstract';

/**
 * Api Service to fetch sports types.
 */
class ServicesService extends ServiceAbstract {
    /**
     * @returns {AxiosPromise}
     */
    getAll(): AxiosPromise<IService[]> {
        return this.apiCaller.get('services');
    }

    /**
     * @returns {AxiosPromise}
     */
    setActive(id: number): AxiosPromise<any> {
        // id should be placed instead of wildcard "__" in url, but unfortunatelly, there is a bug 
        // in mockserver
        return this.apiCaller.patch(`services/__/active`);
    }
}

export default new ServicesService();