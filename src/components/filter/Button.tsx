import React from 'react';

interface IButton {
    caption: string;
}

import './sass/button.scss';

export default function Button({ caption }: IButton): JSX.Element {
    return <button className="button button--margin-sides">{caption}</button>
}