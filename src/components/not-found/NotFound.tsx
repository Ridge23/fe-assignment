import React from 'react';

import './sass/not-found.scss';

interface INotFound {
    location: string;
}

export default function NotFound({ location }: INotFound): JSX.Element {
    return <div className="not-found">{`${location} not found`}</div>
}