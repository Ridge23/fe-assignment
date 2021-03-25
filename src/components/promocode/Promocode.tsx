import React from 'react';
import { useSnackbar } from 'react-simple-snackbar';

import CopyIcon from 'components/icons/CopyIcon/CopyIcon';
import copyToClipboard from 'helpers/copyToClipboard';

import './sass/promocode.scss';

interface IPromocode {
    promocode: string;
}

export default function Promocode({ promocode }: IPromocode): JSX.Element {
    const [openSnackbar, closeSnackbar] = useSnackbar({ position: 'bottom-right' });

    function handleClick(event: React.MouseEvent<HTMLElement>) {
        event.preventDefault();
        copyToClipboard(promocode);
        openSnackbar('Copied to clipboard', 2000);
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