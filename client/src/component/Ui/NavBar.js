import React, {Component} from 'react';
import {Menu}             from "semantic-ui-react";

class NavBar extends Component {
    state = {
        activeItem: 'Home'
    };

    // handleItemClick = (e, {name}) => this.setState({activeItem: name});

    handleItemClick = (e, {name}) => {
        this.setState({
            activeItem: name
        })
    };

    render () {
        const {activeItem} = this.state;
        return (
            <Menu attached='top' tabular>
                <Menu.Item
                    name='Home'
                    active={activeItem === 'Home'}
                    icon='home'
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='Create'
                    active={activeItem === 'Create'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='photos'
                    active={activeItem === 'photos'}
                    onClick={this.handleItemClick}
                />
            </Menu>

        )
    }
}

export default NavBar;