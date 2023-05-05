import React, { useEffect, useRef, useState } from 'react';
import ApexCharts from 'apexcharts';

const PieChart = ({ questionId }) => {
  const chartRef = useRef(null);

  console.log('questionId de componente PieChart',questionId);

  useEffect(() => {
    const options = {
      series: [40, 30, 20, 10],
      colors: ['#54bfed', '#c275ef', '#2dba9f', '#f48e76'],
      chart: {
        width: 360,
        type: 'pie',
      },
      labels: ['Muy baja', 'Baja', 'Alta', 'Muy alta'],
      dataLabels: {
        style: {
          fontSize: '12px',
          textAlign: 'top',
        },
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 250
          },
          legend: {
            position: 'top'
          }
        }
      }]
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => chart.destroy();
  }, []);

  return <div ref={chartRef} />;
};

PieChart.displayName = 'PieChart';

export default PieChart;
