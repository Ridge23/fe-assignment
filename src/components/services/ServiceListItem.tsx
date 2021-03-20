import React from 'react';

import Button from '../form/Button';
import Promocode from '../promocode/Promocode';

import './sass/service-list-item.scss';

export default function ServiceListItem() {
    return (
        <div className="service-list-item">
            <div className="service-list-item__info">
                <div className="service-list-item__title">Siteconstructor.io</div>
                <div className="service-list-item__description">Description</div>
            </div>
            <div className="service-list-item__promocode">
                <Promocode />
            </div>
            <div className="service-list-item__actions">
                <Button caption="Activate bonus" wide blue />
            </div>
        </div>
    )
}