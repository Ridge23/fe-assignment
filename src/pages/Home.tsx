import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import ServiceListItem from '../components/services/ServiceListItem';
import Layout from '../components/layout/Layout';
import Filter from '../components/filter/Filter';

import { IState } from '../reducers';
import { IService } from '../reducers/Service';
import { fetchServices, setServiceActive } from '../actions/Services';

import './sass/home.scss';

export default function Home(): JSX.Element {
    const dispatch = useDispatch();
    const services = useSelector((state: IState) => state.Service.services);
    useEffect(() => {
        dispatch(fetchServices())
    }, []);

    return (
        <Layout title="Services">
            <Filter />
            <div className="services-container">
                {services && services.map((service: IService) => <ServiceListItem 
                    {...service} 
                    key={`service-${service.id}`}
                    onClick={(id) => { dispatch(setServiceActive(id)) }}
                />)}
            </div>
        </Layout>
    );
}