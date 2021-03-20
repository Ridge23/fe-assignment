import React from 'react';

import SideMenu from '../sidemenu/SideMenu';

import './sass/layout.scss';

interface ILayout {
    children: JSX.Element | string;
}

export default function Layout({ children }: ILayout): JSX.Element {
    return (
        <div className="layout">
            <div className="layout__sidebar">
                <SideMenu />
            </div>
            <div className="layout__content">
                <div className="layout__content-header">
                </div>
                <div className="layout__content-container">
                    {children}
                </div>
                <footer className="layout__content-footer">
                </footer>
            </div>
        </div>
    )
}