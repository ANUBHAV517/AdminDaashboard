import React from 'react';
import { List, Avatar } from 'antd';

const ActivityList = () => {
  const activities = [
    {
      title: 'User logged in',
      description: 'User John Doe logged in',
      avatar: 'U',
    },
    {
      title: 'New order placed',
      description: 'Order #1234 has been placed',
      avatar: 'O',
    },
  ];

  return (
    <List
      itemLayout="horizontal"
      dataSource={activities}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar>{item.avatar}</Avatar>}
            title={item.title}
            description={item.description}
          />
        </List.Item>
      )}
    />
  );
};

export default ActivityList;
