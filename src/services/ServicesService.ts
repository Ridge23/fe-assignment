import ServiceAbstract from './ServiceAbstract';

/**
 * Api Service to fetch sports types.
 */
 class ServicesService extends ServiceAbstract {
    /**
     * @returns {AxiosPromise}
     */
    getAll() {
        return this.apiCaller.get('services');
    }
}

export default new ServicesService();