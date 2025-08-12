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
          id: "comparison-bar",
          background: 'transparent',
          toolbar: {
            show: false
          }
        },
        colors: ['#00E396', '#FF4560'],
        plotOptions: {
          bar: {
            borderRadius: 4,
            columnWidth: '60%',
            colors: {
              ranges: [
                {
                  from: -50,
                  to: -1,
                  color: '#FF4560'
                },
                {
                  from: 0,
                  to: 50,
                  color: '#00E396'
                }
              ]
            }
          }
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
          name: "Net Change",
          data: [2,-3,5,1,-1,0,-2,4,1,-2]
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
              type="bar"
              width="100%"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ComparisonChart;
