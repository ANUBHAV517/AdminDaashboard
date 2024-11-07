import React from 'react';
import { Card } from 'antd';

const StatisticsCard = ({ title, value, icon, color }) => (
  <Card style={{ width: '100%', padding: '0' }} className="cardBody">
    <div className="cardContent">
      <div>
        <p>{title}</p>
        <h2>
          {value}
          <span style={{ color: color }}> +30%</span>
        </h2>
      </div>
      <div className="leftCardContent">
        <span>{icon}</span>
      </div>
    </div>
  </Card>
);

export default StatisticsCard;
