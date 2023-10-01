import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

const RADIAN = Math.PI / 180;

const Statistics = ({ totalDonations, yourDonations }) => {
  const percentage = ((yourDonations / totalDonations) * 100).toFixed(2);

  // Create data for the pie chart
  const data = [
    { value: (yourDonations / 100) * 1000, name: '%', color: '#FF6384' },
    { name: '%', value: (((totalDonations - yourDonations) / 100) * 1000) - (yourDonations / 100) * 1000 , color: 'green' },
  ];

  return (
    <div>
      <PieChart width={800} height={800}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          innerRadius={60}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color}>
             
             
            </Cell>
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default Statistics;
