'use client'

import ChildrenInterface from "@/interface/children.interface"
import { CreditCardOutlined, ProductOutlined, ReconciliationOutlined, UserOutlined } from "@ant-design/icons"
import { Layout, Menu } from "antd"
import Link from "next/link"
import { FC } from "react"

const { Sider , Content , Header } = Layout

export const AdminLayout: FC<ChildrenInterface> = ({children}) => {
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
    <Layout>
        <Sider width={250}>
            <Menu
            theme="dark" 
            items={menus}
            />
        </Sider>
        <Layout>
            <Content>
                <Header className="!bg-white"></Header>
                <div className="p-12">
                    {children}
                </div>
            </Content>
        </Layout>
    </Layout>
  )
}
