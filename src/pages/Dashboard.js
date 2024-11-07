import React, { useState } from 'react';
import { Row, Col, Layout, Flex, Card } from 'antd';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import StatisticsCard from '../components/StatisticsCard';
import UserTable from '../components/UserTable';
import ActivityList from '../components/ActivityList';
import {
  UserOutlined,
  DollarCircleOutlined,
  ShoppingCartOutlined,
  DollarTwoTone,
  DollarCircleTwoTone,
  DollarCircleFilled,
  UpSquareFilled,
} from '@ant-design/icons';
import Sider from 'antd/es/layout/Sider';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import CustomBarChart from '../components/CustomBarChart';
import CustomLineChart from '../components/CustomLineChart';
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: '0px !important',
  // paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#F5F5F5',
};
const contentStyle = {
  display: 'flex',
  flexDirection: 'column',
  // textAlign: 'center',
  // minHeight: 120,
  // lineHeight: '120px',
  color: '#fff',
  // backgroundColor: '#0958d9',
};
const siderStyle = {
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#F5F5F5',
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
};
const layoutStyle = {
  // overflow: 'hidden',
  width: 'calc(100% - 8px)',
  maxWidth: 'calc(100% - 8px)',
  height: '100vh',
  margin: 'auto',
};
const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={layoutStyle}>
      <Sider
        width="20%"
        style={siderStyle}
        collapsible
        collapsed={collapsed}
        onCollapse={() => setCollapsed(!collapsed)}
      >
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      </Sider>
      <Layout>
        <Header style={headerStyle}>
          <Navbar />
        </Header>
        <Content style={contentStyle}>
          {/* <div className="topContent"> */}
          <Flex gap="20px">
            <StatisticsCard
              title="Total Sales"
              value="$53,000"
              icon={
                <DollarCircleFilled
                  style={{ fontSize: '24px', color: '#1890FF' }}
                />
              }
              color="#4caf50"
            />
            <StatisticsCard
              title="Total Sales"
              value="$53,000"
              icon={
                <DollarCircleFilled
                  style={{ fontSize: '24px', color: '#1890FF' }}
                />
              }
              color="#4caf50"
            />
            <StatisticsCard
              title="Total Sales"
              value="$53,000"
              icon={
                <DollarCircleFilled
                  style={{ fontSize: '24px', color: '#1890FF' }}
                />
              }
              color="#4caf50"
            />
            <StatisticsCard
              title="Total Sales"
              value="$53,000"
              icon={
                <DollarCircleFilled
                  style={{ fontSize: '24px', color: '#1890FF' }}
                />
              }
              color="#4caf50"
            />{' '}
          </Flex>
          <Flex gap="small">
            <CustomBarChart />

            <CustomLineChart />
          </Flex>
          <Flex gap="small">
            <CustomBarChart />

            <CustomBarChart />
          </Flex>
        </Content>
        {/* <Footer style={footerStyle}>Footer</Footer> */}
      </Layout>
    </Layout>
  );
};

export default Dashboard;
