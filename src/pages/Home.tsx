import React from 'react';

import Layout from '../components/layout/Layout';
import Filter from '../components/filter/Filter';

export default function Home(): JSX.Element {
    return <Layout title="Services">
        <Filter />
    </Layout>
}