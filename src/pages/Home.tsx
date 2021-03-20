import React from 'react';

import Layout from '../components/layout/Layout';
import Filter from '../components/filter/Filter';

import './sass/home.scss';
import ServiceListItem from '../components/services/ServiceListItem';

export default function Home(): JSX.Element {
    return (<Layout title="Services">
        <Filter />
        <div className="services-container">
            <ServiceListItem />
            <ServiceListItem />
            <ServiceListItem />
            <ServiceListItem />
        </div>
    </Layout>)
}