import React from 'react';
import { Card } from 'antd';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Jan', pv: 240, uv: 400 },
  { name: 'Feb', pv: 139, uv: 300 },
  { name: 'Mar', pv: 980, uv: 200 },
  { name: 'Apr', pv: 390, uv: 278 },
  { name: 'May', pv: 480, uv: 189 },
  { name: 'Jun', pv: 380, uv: 239 },
  { name: 'Jul', pv: 430, uv: 349 },
  { name: 'Aug', pv: 480, uv: 890 },
  { name: 'Sep', pv: 380, uv: 289 },
  { name: 'Oct', pv: 280, uv: 189 },
];

const CustomLineChartCard = () => (
  <Card
    // title="Monthly Data"
    bordered={false}
    style={{
      width: '60%',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      borderRadius: '10px',
      backgroundColor: '#ffffff',
    }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {/* Left side for Heading and Paragraph */}
      <div style={{ flex: 1 }}>
        <h3>Active Users</h3>
        <p>than last week +30%</p>
      </div>

      {/* Right side for Legend */}
    </div>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{
          top: 0,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <Tooltip />
        <Legend align="right" verticalAlign="top" />
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line yAxisId="right" type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  </Card>
);

export default CustomLineChartCard;
