'use client'
import React, { FC } from 'react';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  CreditCardOutlined,
  ProductOutlined,
  ReconciliationOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme, Dropdown, Avatar } from 'antd';
import ChildrenInterface from '@/interface/children.interface';
import Link from 'next/link';
import Logo from './shared/logo';

const { Header, Content, Footer, Sider } = Layout;

const siderStyle: React.CSSProperties = {
  overflow: 'auto',
  height: '100vh',
  position: 'sticky',
  insetInlineStart: 0,
  top: 0,
  scrollbarWidth: 'thin',
  scrollbarGutter: 'stable',
};

const items: MenuProps['items'] = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

const AdminLayout:FC<ChildrenInterface> = ({children}) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const currentYear = new Date().getFullYear();

  const menus = [
        {
            icon: <ProductOutlined />,
            label: <Link href="/admin/products">Products</Link>,
            key: "products"
        },
        {
            icon: <ReconciliationOutlined />,
            label: <Link href="/admin/orders">Orders</Link>,
            key: "orders"
        },
        {
            icon: <CreditCardOutlined />,
            label: <Link href="/admin/payments">Payments</Link>,
            key: "payments"
        },
        {
            icon: <UserOutlined />,
            label: <Link href="/admin/users">Users</Link>,
            key: "users"
        }
    ]

  return (
    <Layout hasSider>
      <Sider style={siderStyle}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={menus} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} className='flex items-center'>
          <div className='p-8 flex justify-between w-full items-center'>
            <Logo />
          </div>
          <div>
            <Dropdown>
              <Avatar size="large" />
            </Dropdown>
          </div>
        </Header>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div
            style={{
              padding: 24,
              textAlign: 'center',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
          
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{currentYear} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;