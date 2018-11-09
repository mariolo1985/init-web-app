import React, { Component } from 'react';
import { xmlHttpRequestOnSuccess } from 'simply-requests';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            isLoaded: false
        };
    }

    componentDidMount = () => {
        xmlHttpRequestOnSuccess('/data/menu.json', this.handleMenuData);
    }

    // helpers
    handleMenuData = (response) => {
        console.log(response);
        this.setState({
            data: JSON.parse(response.response),
            isLoaded: true
        });
    }

    render() {
        const { isLoaded } = this.state;

        if (!isLoaded) {
            return null;
        }

        return (
            <div className='menu-wrapper'>
                <ul className='menu clear'>
                    <li>menu item</li>
                </ul>
            </div>
        );
    }
}

export default Menu;
