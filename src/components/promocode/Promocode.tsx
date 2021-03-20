import React from 'react';

import { CopyIcon } from '../icons/CopyIcon/CopyIcon';

import './sass/promocode.scss';

export default function Promocode() {
    return (
        <div className="promocode">
            <div className="promocode__title">
                Promocode
            </div>
            <div className="promocode__container">
                <div>itpromocodes</div>
                <CopyIcon />
            </div>
        </div>
    )
}