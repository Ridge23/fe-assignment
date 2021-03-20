import React from 'react';

import SideMenu from '../sidemenu/SideMenu';
import TopBar from '../topbar/TopBar';
import Footer from '../footer/Footer';

import './sass/layout.scss';

interface ILayout {
    title: string;
    children: JSX.Element | JSX.Element[] | string;
}

export default function Layout({ title, children }: ILayout): JSX.Element {
    return (
        <div className="layout">
            <div className="layout__sidebar">
                <SideMenu />
            </div>
            <div className="layout__content">
                <div className="layout__content-header">
                    <TopBar />
                </div>
                <div className="layout__content-container">
                    <React.Fragment>
                        <h1 className="layout__content-title">{title}</h1>
                        {children}
                    </React.Fragment>
                </div>
                <div className="layout__content-footer">
                    <Footer />
                </div>
            </div>
        </div>
    )
}