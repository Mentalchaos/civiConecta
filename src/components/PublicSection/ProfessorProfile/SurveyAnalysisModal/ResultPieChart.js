import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

const ResultPieChart = ({ series, labels }) => {

  const chartRef = useRef(null);

  useEffect(() => {

    const options = {
      series: series,
      colors: ['#54bfed', '#c275ef', '#2dba9f', '#f48e76'],
      chart: {
        //width: 720,
        height: 360,
        type: 'pie',
      },
      legend: {
        show: true,
        showForSingleSeries: false,
        showForNullSeries: true,
        showForZeroSeries: true,
        position: 'top',
        horizontalAlign: 'center', 
        fontSize: '14px',
        fontFamily: 'Helvetica, Arial',
        fontWeight: 600,
        itemMargin: {
          horizontal: 15,
          vertical: 10
        },
      },
      labels: labels
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => chart.destroy();
  }, [series, labels]);

  return <div ref={chartRef} />;
};

ResultPieChart.displayName = 'PieChart';

export default ResultPieChart;
