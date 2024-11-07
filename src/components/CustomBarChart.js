import { Flex } from 'antd';
import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Feb', value: 400 },
  { name: 'Mar', value: 300 },
  { name: 'Apr', value: 200 },
  { name: 'May', value: 278 },
  { name: 'Jun', value: 189 },
  { name: 'Jul', value: 239 },
  { name: 'Aug', value: 349 },
  { name: 'Sep', value: 349 },
  { name: 'Oct', value: 349 },
];
function CustomBarChart() {
  return (
    <div className="customBarChartWrapper">
      <ResponsiveContainer
        width="100%"
        height={200}
        style={{
          background:
            'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,13,255,0.8800770308123249) 0%, rgba(177,126,192,1) 100%)',
          borderRadius: '8px',
        }}
      >
        <BarChart data={data} margin={{ top: 30, right: 30, bottom: 5 }}>
          <CartesianGrid
            strokeDasharray="3 3"
            horizontal={true}
            vertical={false}
          />
          <XAxis dataKey="name" tick={{ fill: '#FFFFFF' }} />
          <YAxis tick={{ fill: '#FFFFFF' }} />
          {/* <Tooltip /> */}
          <Bar dataKey="value" fill="#e3e6e4" isAnimationActive={false} />
        </BarChart>
      </ResponsiveContainer>
      <div>
        <h3>Active Users</h3>
        <p>than last week +30%</p>
        <p>
          We have created multiple option for you to put together and customise
          into pixel perfect pages
        </p>
        <Flex justify="space-around">
          <div>
            <h3>3.6K</h3>
            <p>Users</p>
          </div>
          <div>
            <h3>3.6K</h3>
            <p>Users</p>
          </div>
          <div>
            <h3>3.6K</h3>
            <p>Users</p>
          </div>
          <div>
            <h3>3.6K</h3>
            <p>Users</p>
          </div>
        </Flex>
      </div>
    </div>
  );
}

export default CustomBarChart;
