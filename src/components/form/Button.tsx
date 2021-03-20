import React from 'react';
import classNames from 'classnames';

interface IButton {
    caption: string;
    wide?: boolean;
    blue?: boolean;
}

import './sass/button.scss';

export default function Button({ caption, wide = false, blue = false }: IButton): JSX.Element {
    const buttonClass = classNames(
        'button', 
        'button--margin-sides',
        {
            'button--wide': wide,
            'button--blue': blue
        }
    );
    return <button className={buttonClass}>{caption}</button>
}