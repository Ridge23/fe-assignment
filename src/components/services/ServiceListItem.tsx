import React from 'react';

import Button from 'components/form/Button';
import Promocode from 'components/promocode/Promocode';

import { IService } from 'reducers/Service';

import './sass/service-list-item.scss';

interface IServiceListItem extends IService {
    onClick: (id: number) => void;
}

export default function ServiceListItem(props: IServiceListItem): JSX.Element {
    const { id, title, description, isActive, promocode, onClick } = props;
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
                <Button 
                    caption={!isActive ? "Activate bonus" : 'Active'}
                    wide 
                    blue 
                    disabled={isActive}
                    onClick={() => {!isActive && onClick(id)}}
                />
            </div>
        </div>
    )
}