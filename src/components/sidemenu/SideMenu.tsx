import React from 'react';
import { Link, useLocation } from "react-router-dom";

import LogoIcon from 'components/icons/LogoIcon/LogoIcon';

import SideMenuItem from './SideMenuItem';

import './sass/sidemenu.scss';

export default function SideMenu(): JSX.Element {
    let location = useLocation();
    return (
        <div className="sidemenu">
            <div className="sidemenu__logo">
                <Link to='/'>
                    <LogoIcon />
                </Link>
            </div>
            <div className="sidemenu__menu">
                <SideMenuItem to='/' isActive={location.pathname === '/'} />
                <SideMenuItem to='/services' isActive={location.pathname === '/services'} />
                <SideMenuItem to='/about' isActive={location.pathname === '/about'} />
                <SideMenuItem to='/' />
                <SideMenuItem to='/' />
                <SideMenuItem to='/' />
                <SideMenuItem to='/' />
            </div>
        </div>
    )
}