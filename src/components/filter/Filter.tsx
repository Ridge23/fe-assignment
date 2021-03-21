import React, { useState } from 'react';

import InputText from '../form/InputText';
import Button from '../form/Button';

import './sass/filter.scss';

interface IFilter {
    handleChange: (value: string) => void;
}

export default function Filter({ handleChange }: IFilter): JSX.Element {
    const [value, setValue] = useState('');

    const changeHandler = (value: string = ''): void => { 
        setValue(value); 
        handleChange(value); 
    }

    return <div className="filter">
        <div className="filter__title">
            Filter
        </div>
        <div className="filter__content">
            <InputText 
                value={value} 
                onChange={changeHandler} 
            />
            <Button caption="Reset" onClick={() => { changeHandler('') }} />
        </div>
    </div>
}