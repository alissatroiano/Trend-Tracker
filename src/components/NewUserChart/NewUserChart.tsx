import { Component } from "react";
import Chart from "react-apexcharts";
import'./NewUserChart.css';

interface Props {}

interface State {
  options: any;
  series: any[];
}

class NewUserChart extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
          background: 'transparent',
          toolbar: {
            show: false
          }
        },
        colors: ['#00E396'],
        grid: {
          borderColor: '#e7e7e79d',
          strokeDashArray: 3
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            columnWidth: '60%'
          }
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
              colors: '#85d2ddff',
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
        title: {
          style: {
            color: '#fafafa'
          }
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
              return val + ' users';
            }
          }
        }
      },
      series: [
        {
          name: "New Users",
          data: [3,5,1,0,2,7,1,9,13,3,5,6,1,0].slice(-10)
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
              width="400px"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default NewUserChart;
