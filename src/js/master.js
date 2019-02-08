import React from 'react';
import { render } from 'react-dom';

import { Menu, Test } from '../components';

(() => {
    const menu = document.getElementById('menu-container');
    if (menu !== null) {
        render(
            <Test />,
            menu
        );
    }
})();
