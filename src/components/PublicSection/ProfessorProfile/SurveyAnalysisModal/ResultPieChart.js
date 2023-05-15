import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const ResultPieChart = ({ series, labels }) => {

  const chartRef = useRef(null);

  useEffect(() => {

    const options = {
      series: series,
      colors: ['#54bfed', '#c275ef', '#2dba9f', '#f48e76'],
      chart: {
        width: 360,
        type: 'pie',
      },
      labels: labels,
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
            width: 360
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
  }, [series, labels]);

  return <div ref={chartRef} />;
};

ResultPieChart.displayName = 'PieChart';

export default ResultPieChart;
