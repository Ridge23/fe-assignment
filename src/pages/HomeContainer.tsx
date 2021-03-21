import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { IState } from '../reducers';
import { fetchServices, setServiceActive } from '../actions/Services';

import Home from './Home';

export default function HomeContainer(): JSX.Element {
    const dispatch = useDispatch();
    const services = useSelector((state: IState) => state.Service.services);
    useEffect(() => {
        dispatch(fetchServices(''))
    }, []);

    const handleFetchServices = useCallback((value: string) => {
        dispatch(fetchServices(value));
    }, [dispatch]);
    const hadnleSetServiceActive = useCallback((id: number) => {
        dispatch(setServiceActive(id));
    }, [dispatch]);

    return <Home
        services={services}
        getServices={handleFetchServices}
        setServiceActive={hadnleSetServiceActive}
    />;
}