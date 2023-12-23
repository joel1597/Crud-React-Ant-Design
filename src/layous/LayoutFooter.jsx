import React, { useContext } from 'react'
import { Layout } from 'antd'
import ValueContext from '../context/AuthProvider'

const { Footer } = Layout

export const LayoutFooter = () => {

  const { lastname } = useContext(ValueContext)  

  return (
    <Footer>
        Ant Design ©2023 Created by Ant UED
        {lastname}

    </Footer>
  )
}
