import React from 'react';

import SideMenuItem from './SideMenuItem';

import LogoIcon from '../icons/LogoIcon/LogoIcon';

import './sass/sidemenu.scss';

export default function SideMenu(): JSX.Element {
    return (
        <div className="sidemenu">
            <div className="sidemenu__logo">
                <LogoIcon />
            </div>
            <div className="sidemenu__menu">
                <SideMenuItem isActive />
                <SideMenuItem />
                <SideMenuItem />
                <SideMenuItem />
                <SideMenuItem />
                <SideMenuItem />
                <SideMenuItem />
            </div>
        </div>
    )
}