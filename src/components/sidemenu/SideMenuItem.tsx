import React from 'react';
import classNames from 'classnames';

import './sass/sidemenu-item.scss';

interface ISideMenuItem {
    isActive?: boolean;
}

export default function SideMenuItem({ isActive = false }: ISideMenuItem) {
    const iconClass = classNames('side-menu-item__icon', { 'side-menu-item__icon--active': isActive });
    return (
        <div className="side-menu-item">
            <div className={iconClass}></div>
        </div>
    )
}