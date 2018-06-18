import React, {Component} from 'react';
import {Grid, Segment}    from "semantic-ui-react";
import NavBar             from "./NavBar";
import SideBar            from "./SideBar";
import BookApp            from '../api/BookApp';

class Layout extends Component {
    render () {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <NavBar/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <SideBar/>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <BookApp/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default Layout;