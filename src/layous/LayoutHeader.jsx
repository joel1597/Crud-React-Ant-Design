import React, { useContext } from 'react'
import { Layout, Input } from 'antd'
import ValueContext from '../context/AuthProvider';

const { Header } = Layout;

export const LayoutHeader = () => {

  const { lastname } = useContext(ValueContext)

  return (
    <Header>
        <Input placeholder='Ingresa algo'/>
    </Header>
  )
}
