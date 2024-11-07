import React, { useState } from 'react';
import { Button, Card, Menu } from 'antd';
import {
  UserOutlined,
  LayoutOutlined,
  TableOutlined,
  WalletOutlined,
  FlagOutlined,
  LogoutOutlined,
  LoginOutlined,
} from '@ant-design/icons';
import { Divider, Typography } from 'antd';
const Sidebar = (Props) => {
  const { Title, Paragraph, Text, Link } = Typography;
  const items = [
    {
      key: '1',
      icon: <LayoutOutlined />,
      label: 'Dashboard',
    },
    {
      key: '2',
      icon: <TableOutlined />,
      label: 'Tables',
    },
    {
      key: '3',
      icon: <WalletOutlined />,
      label: 'Billing',
    },
    {
      key: '4',
      icon: <FlagOutlined />,
      label: 'RTL',
    },
    {
      key: 'grp',
      label: 'Group',
      type: 'group',
      children: [
        {
          key: '5',
          icon: <UserOutlined />,
          label: 'Profile',
        },
        {
          key: '6',
          icon: <LoginOutlined />,
          label: 'Sign In',
        },
        {
          key: '7',
          icon: <LogoutOutlined />,
          label: 'Sign Up',
        },
      ],
    },
  ];

  const toggleCollapsed = () => {
    console.log(Props?.collapsed, 'collapsed');
    Props?.setCollapsed(!Props?.collapsed);
  };
  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
    <div className="sidemenu">
      <Title level={4} className="sidebarTitle">
        Demo Template
      </Title>
      <Menu
        onClick={onClick}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        bac
        inlineCollapsed={Props?.collapsed}
        items={items}
        style={{ backgroundColor: '#F0F2F5' }}
      />

      <Card
        style={{
          margin: '30px',
        }}
        className="sidebarCard"
      >
        <LoginOutlined />
        <Title level={5}>Need Help ?</Title>
        <p>Please check our docs</p>
        <Button>Documentation</Button>
      </Card>
    </div>
  );
};

export default Sidebar;

{
  /* <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 16,
        }}
      >
        {Props?.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button> */
}
