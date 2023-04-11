import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Outlet, Link } from 'react-router-dom';
import '../../index.css'

const { Header, Content, Footer, Sider } = Layout;
const menu = [
  {
    key: '1',
    label: (<a href='/admin/products'>Product</a>),
  },
  {
    key: '1',
    label: (<a href='/admin/categories'>Category</a>),
  },
  
]




const Adminlayout: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={menu} />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item><Link  to={'/'}>Home</Link></Breadcrumb.Item>
          
        </Breadcrumb>
        <Layout style={{ padding: '24px 0', background: colorBgContainer }}>
          <Sider style={{ background: colorBgContainer }} width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
              
            />
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>

            < Outlet/>
            
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  );
};

export default Adminlayout;