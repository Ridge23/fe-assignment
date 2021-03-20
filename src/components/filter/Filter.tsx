import React from 'react';

import InputText from '../form/InputText';
import Button from '../form/Button';

import './sass/filter.scss';

export default function Filter(): JSX.Element {
    return <div className="filter">
        <div className="filter__title">
            Filter
        </div>
        <div className="filter__content">
            <InputText />
            <Button caption="Reset" />
        </div>
    </div>
}