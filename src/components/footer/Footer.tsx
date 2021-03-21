import React from 'react';

import './sass/footer.scss';

export default function Footer(): JSX.Element {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <hr className="footer__divider" />
            © IT Promocodes, {currentYear}
        </footer>
    )
}