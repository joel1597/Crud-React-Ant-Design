import { Layout } from 'antd'
import { LayoutHeader } from './layous/LayoutHeader'
import { LayoutAside } from './layous/LayoutAside'
import { LayoutContent } from './layous/LayoutContent'
import { LayoutFooter } from './layous/LayoutFooter'
import './App.css'
function App() {

  return (
    <Layout className='layout____main'>
      <LayoutHeader />
      <Layout hasSider className='layout____submain'>
        <LayoutAside />
        <LayoutContent />
      </Layout>
      <LayoutFooter />
    </Layout>
  )
}

export default App
