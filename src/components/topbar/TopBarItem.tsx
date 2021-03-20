import React from 'react';

import './sass/top-bar-item.scss';

interface ITopBarItem {
    title: string;
    info: string;
}

export default function TopBarItem({ title, info }: ITopBarItem): JSX.Element {
    return <div className="top-bar-item">
        <div className="top-bar-item__title">{title}</div>
        <div className="top-bar-item__info">{info}</div>
    </div>
}