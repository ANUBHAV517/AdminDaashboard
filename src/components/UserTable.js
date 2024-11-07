import React from 'react';
import { Table, Button, Space } from 'antd';

const UserTable = () => {
  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Status', dataIndex: 'status', key: 'status' },
    { title: 'Role', dataIndex: 'role', key: 'role' },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Button type="link">Edit</Button>
          <Button type="link" danger>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: 1,
      name: 'John Doe',
      email: 'john@example.com',
      status: 'Active',
      role: 'Admin',
    },
    {
      key: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      status: 'Inactive',
      role: 'User',
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default UserTable;
