import React, { Component } from 'react';
import ApexCharts from 'apexcharts';

class PieChart extends Component {
  constructor(props) {
    super(props);

    this.chartRef = React.createRef();
  }

  componentDidMount() {
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

    const chart = new ApexCharts(this.chartRef.current, options);
    chart.render();
  }

  render() {
    return (
      <div ref={this.chartRef} />
    );
  }
}

export default PieChart;
