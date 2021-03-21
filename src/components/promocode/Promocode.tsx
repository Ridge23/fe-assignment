import React from 'react';

import { CopyIcon } from '../icons/CopyIcon/CopyIcon';
import copyToClipboard from '../../helpers/copyToClipboard';

import './sass/promocode.scss';

interface IPromocode {
    promocode: string;
}

export default function Promocode({ promocode }: IPromocode): JSX.Element {
    function handleClick(event: React.MouseEvent<HTMLElement>) {
        event.preventDefault();
        copyToClipboard(promocode);
    }

    return (
        <div className="promocode">
            <div className="promocode__title">
                Promocode
            </div>
            <div className="promocode__container">
                <div>{promocode}</div>
                <a onClick={handleClick}>
                    <CopyIcon />
                </a>
            </div>
        </div>
    )
}