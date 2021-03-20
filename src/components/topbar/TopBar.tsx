import React from 'react';

import TopBarItem from './TopBarItem';

import './sass/top-bar.scss';

export default function TopBar(): JSX.Element {
    return <div className="top-bar">
        <TopBarItem title="Balance" info="213 980 $" />
        <TopBarItem title="Payout" info="159 465 $" />
    </div>
}