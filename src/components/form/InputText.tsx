import React from 'react';

import './sass/input-text.scss';

interface IInputText {
    value: string;
    onChange: (value: string) => void;
}

export default function InputText({ value, onChange }: IInputText): JSX.Element {
    return <input 
        type="text" 
        value={value} 
        className="input-text" 
        onChange={(event) => { onChange(event.target.value) }}
    />
}