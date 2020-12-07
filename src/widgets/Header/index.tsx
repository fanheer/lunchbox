import React from 'react'
import { Layout, Menu } from 'antd'
const { Header } = Layout;
export default function index() {
    const menuList = [
      { key: "1", value: "nav 1" },
      { key: "2", value: "nav 2" },
      { key: "3", value: "nav 3" },
    ];
    return (
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[]}>
          {menuList.map((menu, index) => {
            return <Menu.Item key={menu.key}>{menu.value}</Menu.Item>;
          })}
        </Menu>
      </Header>
    );
}
