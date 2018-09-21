import React from 'react';
import { render } from 'react-dom';

import { Menu } from '../components';

(() => {
    const menu = document.getElementById('menu-container');
    if (menu !== null) {
        render(
            <Menu />,
            menu
        );
    }
})();
