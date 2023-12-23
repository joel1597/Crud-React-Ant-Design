import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Switch, Layout } from 'antd'
import React from 'react'

const { Sider } = Layout

export const LayoutAside = () => {

    const [theme, setTheme] = useState('dark')

    const changeTheme = (event) => {
        setTheme(event ? 'dark' : 'light')
    }

    const items = [
        {
            label: 'Bunker',
            key: 'sub1',
            icon: <MailOutlined />,
            children: [
                {
                    label: <Link to='post'>Administarion</Link>,
                    key: '1'
                },
                {
                    label: <Link to='groups'>Groups</Link>,
                    key: '2'
                },
                {
                    label: <Link to='clients'>Clients</Link>,
                    key: '3'
                }
            ]
        }        
    ]

    return (
        <Sider 
            className='layout____sider'
            width={255}
        >
            <Switch
                checked={theme === 'dark'}
                onChange={changeTheme}
                checkedChildren="Dark"
                unCheckedChildren="Light"
            />
            <br />
            <br />

            <Menu
                theme={theme}
                //onClick={onClick}
                style={{
                    width: 256,
                }}
                defaultOpenKeys={['sub1']}
                //selectedKeys={[current]}
                mode="inline"
                items={items}
            />
            {/** <Post />*/}
        </Sider>
    )
}
