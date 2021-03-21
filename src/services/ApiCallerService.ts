import axios, { AxiosInstance, AxiosPromise } from 'axios';

export interface IApiCallerService {
    apiCaller: AxiosInstance;
    get: (url: string, data?: object) => AxiosPromise;
    post: (url: string, data?: object) => AxiosPromise;
    patch: (url: string, data?: object) => AxiosPromise;
    delete: (url: string, data?: object) => AxiosPromise;
    setHeader: (url: string, value: string) => void;
}

/**
 * Strategy to create requests.
 */
class ApiCallerService implements IApiCallerService {
    /**
     * @param {AxiosInstance}
     */
    apiCaller: AxiosInstance;

    /**
     * Creates an instance of axios with correct baseUrl and headers.
     */
    constructor() {
        this.apiCaller = axios.create({
            baseURL: process.env.API_BASE_URL,
            timeout: 1000,
            headers: {
                Accept: 'application/json',
            },
        });
    }

    /**
     * @param {string} url
     * @param {object} config
     *
     * @returns {AxiosPromise}
     */
    get(url: string, config = {}): AxiosPromise {
        return this.apiCaller.get(url, config);
    }

    /**
     * @param {string} url
     * @param {object} data
     *
     * @returns {AxiosPromise}
     */
    post(url: string, data = {}): AxiosPromise {
        return this.apiCaller.post(url, data);
    }

    /**
     * @param {string} url
     * @param {object} data
     *
     * @returns {AxiosPromise}
     */
    patch(url: string, data = {}): AxiosPromise {
        return this.apiCaller.patch(url, data);
    }

    /**
     * @param {string} url
     * @param {object} config
     *
     * @returns {AxiosPromise}
     */
    delete(url: string, config = {}): AxiosPromise {
        return this.apiCaller.delete(url, config);
    }

    /**
     * @param {string} name
     * @param {string} value
     */
    setHeader(name: string, value: string): void {
        this.apiCaller.defaults.headers.common[name] = value;
    }
}

export default new ApiCallerService();