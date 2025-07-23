import React from 'react'
import { Layout, Typography } from 'antd'
import Home from './pages/Home'

const { Header, Content, Footer } = Layout
const { Title } = Typography

function App() {
  return (
    <Layout>
      <Header style={{ backgroundColor: '#001529', padding: '0 20px' }}>
        <Title style={{ color: 'white', margin: 0 }} level={3}>
          School Record Tracker Of Yogesh Kumar ....
        </Title>
      </Header>

      <Content style={{ padding: '30px' }}>
        <Home />
      </Content>

      <Footer style={{ textAlign: 'center' }}>
        © {new Date().getFullYear()} Yogesh School Tracker
      </Footer>
    </Layout>
  )
}

export default App
