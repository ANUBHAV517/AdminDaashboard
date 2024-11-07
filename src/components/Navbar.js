import React from 'react';
import { Input, Avatar, Badge, Dropdown, Menu, Breadcrumb } from 'antd';
import { BellOutlined, UserOutlined } from '@ant-design/icons';
import Title from 'antd/es/typography/Title';

const Navbar = () => {
  const profileMenu = (
    <Menu>
      <Menu.Item key="0">Profile</Menu.Item>
      <Menu.Item key="1">Settings</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="2">Logout</Menu.Item>
    </Menu>
  );

  return (
    <div className="navbar">
      <div className="navbarLeft">
        <Breadcrumb
          items={[
            {
              title: 'pages',
            },
            {
              title: 'Dashboard',
            },
          ]}
        />
        <Title level={5}>Dashboard</Title>
      </div>
      <div className="navbarRight">
        <Input.Search placeholder="Search..." style={{ width: 200 }} />
        <Badge count={5}>
          <BellOutlined style={{ fontSize: '24px', margin: '0 20px' }} />
        </Badge>
        <Dropdown overlay={profileMenu} trigger={['click']}>
          <Avatar icon={<UserOutlined />} />
        </Dropdown>
      </div>
    </div>
  );
};

export default Navbar;
