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

    const fullData = [2, -3, 5, 1, -1, 0, -2, 4, 1, -2, 5, 7, -3, 0, 1, -1];
    const data = fullData.slice(-10); // last 10 days

    // Gains: keep positive values, losses become 0
    const gains = data.map(val => (val > 0 ? val : 0));
    // Losses: keep negative values as positive for easier comparison, gains become 0
    const losses = data.map(val => (val < 0 ? Math.abs(val) : 0));

    this.state = {
      options: {
        chart: {
          id: "users-gained-lost",
          background: 'transparent',
          toolbar: { show: false }
        },
        colors: ['#00E396', '#FF4560'], // green = gains, red = losses
        stroke: {
          curve: 'smooth',
          width: 3
        },
        markers: {
          size: 5,
          strokeColors: '#fff',
          strokeWidth: 2
        },
        dataLabels: { enabled: false },
        xaxis: {
          categories: Array.from({ length: data.length }, (_, i) => {
            const date = new Date();
            date.setDate(date.getDate() - (data.length - 1 - i));
            return date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' });
          }),
            plotOptions: {
          line: {
            borderRadius: 4,
            columnWidth: '60%'
          }
        },
          tickAmount: Math.min(data.length, 10),
          labels: {
          rotate: -45,
          style: {
            colors: '#b885ddff',
            fontSize: '9.5px',
            fontWeight: 'medium'
          }
        }
      },
        yaxis: {
          labels: {
            style: {
              colors: '#ffcf21ff',
              fontWeight: 'bold'
            }
          },
          min: 0
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
          y: {
            formatter: function (val: number, { seriesIndex }: any) {
              return seriesIndex === 0
                ? `+${val} users`
                : `-${val} users`;
            }
          }
        }
      },
      series: [
        {
          name: "Users Gained",
          data: gains
        },
        {
          name: "Users Lost",
          data: losses
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
              maxWidth="100%"
              width={"400px"}
              height={322}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ComparisonChart;
