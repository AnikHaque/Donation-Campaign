import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

const RADIAN = Math.PI / 180;

const Statistics = ({ totalDonations, yourDonations }) => {
  const percentage = ((yourDonations / totalDonations) * 100).toFixed(2);

  // Create data for the pie chart
  const data = [
    { name: 'Your Donations', value: yourDonations, color: '#FF6384' },
    { name: 'Remaining Donations', value: totalDonations - yourDonations, color: 'green' },
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
              {/* Show the percentage inside the cell */}
              <text
                x={200} // Adjust the x-coordinate as needed
                y={200} // Adjust the y-coordinate as needed
                fill="white" // Set the text color
                textAnchor="middle" // Center-align the text
                dominantBaseline="middle" // Vertically center the text
              >
                {`${(entry.value / totalDonations * 100).toFixed(0)}%`}
              </text>
            </Cell>
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default Statistics;
