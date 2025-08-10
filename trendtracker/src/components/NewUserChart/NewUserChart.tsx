import { Component } from "react";
import Chart from "react-apexcharts";

interface Props {}

class NewUserChart extends Component<Props> {
  constructor(props: Props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: Array.from({length: 10}, (_, i) => {
            const date = new Date();
            date.setDate(date.getDate() - (9 - i));
            return date.toLocaleDateString('en-US', {month: 'short', day: 'numeric'});
          }),
          labels: {
            show: true,
            style: {
              colors: '#333'
            }
          }
        }
      },
      series: [
        {
          name: "Users",
          data: [3,5,1,0,2,7,1,9,13,3]
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
            />
          </div>
        </div>
      </div>
    );
  }
}

export default NewUserChart;
