import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const PieChart = ({ dataPieChart }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const series = [];
    const labels = [];
    dataPieChart.map(data => series.push(data.percentage));
    dataPieChart.map(data => labels.push(data.label));

    const options = {
      series: series,
      colors: ['#54bfed', '#c275ef', '#2dba9f', '#f48e76'],
      chart: {
        width: 160,
        height: 180,
        type: 'pie',
      },
      labels: labels,
      dataLabels: {
        style: {
          fontSize: '12px',
          textAlign: 'top',
        },
      },
      legend: {
        show: false, // here enable labels
        showForSingleSeries: false,
        showForNullSeries: true,
        showForZeroSeries: true,
        position: 'top',
        horizontalAlign: 'center', 
        fontSize: '14px',
        fontFamily: 'Helvetica, Arial',
        fontWeight: 400,
        itemMargin: {
          horizontal: 15,
          vertical: 10
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
