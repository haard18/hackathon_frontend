import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto'; // Import to register the controllers, elements, scales, and plugins

const PieChart = () => {
  // Data for the pie chart
  const data = {
    labels: ['Order Delivered', 'Total orders', 'Live Orders', 'Orders in transit'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5], // Example data
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(254, 162, 235, 1)',
          'rgba(154, 62, 25, 1)',
          'rgba(255, 206, 86, 1)', 
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(120, 169, 69, 1)',
          
        ],
        borderWidth: 1,
      },
    ],
  };

  // Options for the pie chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display:true,
        position: 'top',
        fontColor:['black']
      },
      title: {
        
        display: true,
        text: 'Pie Chart Example',
      },
      labels:{
        fontColor:['black']
      }
    },
  };

  return <Pie data={data} options={options} />;
};

export default PieChart;