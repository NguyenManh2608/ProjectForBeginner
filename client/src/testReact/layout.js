import { Layout, Menu, Icon, Breadcrumb } from 'antd';
import BookApp from "./BookApp";
import {Link} from "react-router-dom";
import LoginForm from './LoginForm';
import React, {Component} from 'react';
import Router from "./Router";

const { Header, Content, Footer, Sider } = Layout;

const SubMenu = Menu.SubMenu;

export default class LayoutWeb extends Component {
    render() {
        return (
            <Layout>
            <Header className="header">
                <div className="logo"/>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{lineHeight: '64px'}}
                >
                    <Menu.Item key="1"><Icon type="home"/>Home</Menu.Item>
                    <Menu.Item key='5'><input type='text' style={{height: '30px', margin: '0 16px', padding: '0 15px'}}/>
                        <Icon type='search'/></Menu.Item>

                    <Menu.Item key="2">News</Menu.Item>
                    <Menu.Item key="3">Contact</Menu.Item>
                    <Menu.Item key="4" > <Link to='/login'>Login </Link></Menu.Item>
                </Menu>
            </Header>
            <Content style={{padding: '0 50px'}}>
                <Breadcrumb style={{margin: '16px 0'}}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Layout style={{padding: '24px 0', background: '#fff'}}>
                    <Sider width={200} style={{background: '#fff'}}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{height: '100%'}}
                        >
                            <SubMenu key="sub1" title={<span><Icon type="profile"/>Information</span>}>
                                <Menu.Item key="1"><Icon type="user"/>User</Menu.Item>
                                <Menu.Item key="2">Messenger</Menu.Item>
                                <Menu.Item key="3">option3</Menu.Item>
                                <Menu.Item key="4">Sent</Menu.Item>
                                <Menu.Item key="5"><span><Icon type='delete'/>Delete</span></Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="laptop"/>subnav 2</span>}>
                                <Menu.Item key="5">option5</Menu.Item>
                                <Menu.Item key="6">option6</Menu.Item>
                                <Menu.Item key="7">option7</Menu.Item>
                                <Menu.Item key="8">option8</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" title={<span><Icon type="notification"/>Notification</span>}>
                                <Menu.Item key="9">option9</Menu.Item>
                                <Menu.Item key="10">option10</Menu.Item>
                                <Menu.Item key="11">option11</Menu.Item>
                                <Menu.Item key="12">option12</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Content style={{padding: '0 24px', minHeight: 280}}>
                        <Router/>
                        <BookApp/>
                    </Content>
                </Layout>
            </Content>
                <Footer style={{textAlign: 'center'}}>
                    Ant Design ©2016 Created by Ant UED
                </Footer>
            </Layout>
        )
    }
}