import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import './sass/sidemenu-item.scss';

interface ISideMenuItem {
    to: string;
    isActive?: boolean;
}

export default function SideMenuItem({ to, isActive = false }: ISideMenuItem) {
    const iconClass = classNames('side-menu-item__icon', { 'side-menu-item__icon--active': isActive });
    return (
        <Link to={to}>
            <div className="side-menu-item">
                <div className={iconClass}></div>
            </div>
        </Link>
    )
}