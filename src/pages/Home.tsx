import React from 'react';

import ServiceListItem from '../components/services/ServiceListItem';
import Layout from '../components/layout/Layout';
import Filter from '../components/filter/Filter';

import { IService } from '../reducers/Service';

import './sass/home.scss';

interface IHome {
    services: IService[];
    getServices: (filterValue: string) => void;
    setServiceActive: (id: number) => void;
}

export default function Home({ services, getServices, setServiceActive }: IHome): JSX.Element {
    return (
        <Layout title="Services">
            <Filter handleChange={(value) => { getServices(value) } }/>
            <div className="services-container">
                {services && services.map((service: IService) => <ServiceListItem 
                    {...service} 
                    key={`service-${service.id}`}
                    onClick={(id) => { setServiceActive(id) }}
                />)}
            </div>
        </Layout>
    );
}