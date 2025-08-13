import { Component } from "react";
import Chart from "react-apexcharts";
import './ComparisonChart.css';

interface Props {}

interface State {
  options: any;
  series: any[];
}

class ComparisonChart extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "comparison-line",
          background: 'transparent',
          toolbar: {
            show: false
          }
        },
        colors: ['#00E396', '#FF4560'],
        stroke: {
          curve: 'smooth',
          width: 3
        },
        markers: {
          size: 5,
          strokeColors: '#fff',
          strokeWidth: 2
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: Array.from({length: 10}, (_, i) => {
            const date = new Date();
            date.setDate(date.getDate() - (9 - i));
            return date.toLocaleDateString('en-US', {month: '2-digit', day: '2-digit'});
          }),
          tickAmount: 10,
          labels: {
            show: true,
            hideOverlappingLabels: false,
            style: {
              colors: '#b885ddff',
              fontSize: '10px',
              fontWeight: 'bold'
            }
          }
        },
        yaxis: {
          labels: {
            style: {
              colors: '#ffcf21ff',
              fontWeight: 'bold'
            }
          }
        },
        grid: {
          borderColor: '#e7e7e794',
          strokeDashArray: 3
        },
        tooltip: {
          theme: 'dark',
          style: {
            fontSize: '12px',
            fontFamily: 'Futura-PT, sans-serif'
          },
          x: {
            show: true
          },
          y: {
            formatter: function(val: number) {
              return val > 0 ? '+' + val + ' users' : val + ' users';
            }
          }
        }
      },
      series: [
        {
          name: "Users Gained",
          data: [2,5,1,0,4,1,5,7,0,1]
        },
        {
          name: "Users Lost",
          data: [3,0,1,2,0,2,0,3,0,1]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="100%"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ComparisonChart;
