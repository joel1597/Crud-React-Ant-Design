import React from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'

const { Content } = Layout

export const LayoutContent = () => {
    return (
        <Content className='layout___content'>
            <Outlet />
        </Content>        
    )
}
