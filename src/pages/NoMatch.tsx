import React from 'react';
import { useLocation } from "react-router-dom";

import Layout from '../components/layout/Layout';
import NotFound from '../components/not-found/NotFound';

export default function NoMatch() {
    let location = useLocation();
    return <Layout title="Not found"><NotFound location={location.pathname} /></Layout>
}