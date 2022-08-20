import { Route } from "react-router-dom";
import { Fragment } from "react";

import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';

const { Header, Sider, Content } = Layout;



export const AdminTemplate = (props) => {
    const [collapsed, setCollapsed] = useState(false);

    const menuItem = [
        {
            key: '1',
            icon: <UserOutlined />,
            label: 'nav 1',
        },
        {
            key: '2',
            icon: <VideoCameraOutlined />,
            label: 'nav 2',
        },
        {
            key: '3',
            icon: <UploadOutlined />,
            label: 'nav 3',
        },
    ]

    return <Route exact path={props.path} render={(propsRoute) => {
        return <Fragment>


            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={menuItem}
                    />
                </Sider>
                <Layout className="site-layout">
                    <Header
                        className="site-layout-background"
                        style={{
                            padding: 0,
                        }}
                    >
                        {/* {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: () => setCollapsed(!collapsed),
                        })} */}
                        {collapsed ? <MenuUnfoldOutlined style={{color: "white",fontSize:"25px" }} className="trigger" onClick={() => {
                            setCollapsed(!collapsed)
                        }} /> : <MenuFoldOutlined style={{color: "white",fontSize:"25px" }} className="trigger" onClick={() => {
                            setCollapsed(!collapsed)
                        }}/>}


                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >

                        <props.component {...propsRoute} />
                    </Content>
                </Layout>
            </Layout>






        </Fragment>
    }} />
}
