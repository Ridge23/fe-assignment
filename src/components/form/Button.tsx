import React from 'react';
import classNames from 'classnames';

interface IButton {
    caption: string;
    wide?: boolean;
    blue?: boolean;
    disabled?: boolean;
    onClick?: () => void;
}

import './sass/button.scss';

export default function Button({ caption, wide = false, blue = false, disabled = false, onClick = () => {} }: IButton): JSX.Element {
    const buttonClass = classNames(
        'button', 
        'button--margin-sides',
        {
            'button--wide': wide,
            'button--blue': blue,
            'button--disabled': disabled,
        }
    );
    return <button className={buttonClass} onClick={onClick} >{caption}</button>
}