import React, {Component} from 'react';
import {Menu, Segment}    from "semantic-ui-react";

class SideBar extends Component {
    state = {
        activeItem: ''
    };

    handleItemClick = (e, {name}) => {
        this.setState({
            activeItem: name
        })
    };

    render () {

        const {activeItem} = this.state;
        return (
            <Menu vertical>
                <Menu.Item
                    icon    ='circle plus'
                    name    ='Create'
                    onClick ={this.handleItemClick}
                />
                <Menu.Item
                    icon    ='setting'
                    name    ='Setting'
                    onClick ={this.handleItemClick}
                />
                <Menu.Item
                    icon    = 'chart bar'
                    name    =  'Analytics'
                    onClick = {this.handleItemClick}
                />
            </Menu>
        )
    }
}

export default SideBar;