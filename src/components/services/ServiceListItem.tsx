import React from 'react';

import Button from '../form/Button';
import Promocode from '../promocode/Promocode';

import { IService } from '../../reducers/Service';

import './sass/service-list-item.scss';

export default function ServiceListItem({ title, description, isActive, promocode }: IService): JSX.Element {
    return (
        <div className="service-list-item">
            <div className="service-list-item__info">
                <div className="service-list-item__title">{title}</div>
                <div className="service-list-item__description">{description}</div>
            </div>
            <div className="service-list-item__promocode">
                <Promocode promocode={promocode} />
            </div>
            <div className="service-list-item__actions">
                <Button caption="Activate bonus" wide blue />
            </div>
        </div>
    )
}