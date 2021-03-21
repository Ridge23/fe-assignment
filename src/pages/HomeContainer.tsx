import React, { useEffect } from 'react';
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

    return <Home 
        services={services} 
        getServices={(value: string) => dispatch(fetchServices(value))}
        setServiceActive={(id: number) => dispatch(setServiceActive(id))}
    />;
}