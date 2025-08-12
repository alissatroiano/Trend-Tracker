import { Component } from "react";
import Chart from "react-apexcharts";

interface Props {}

class ComparisonChart extends Component<Props> {
  constructor(props: Props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basicBar"
        },
        xaxis: {
          categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }
      },
      series: [
        {
          name: "Users",
          data: [2,-3,5,1,-1,0,-2,4,1,-2,5,7,-3,0,1,-1]
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
              width="400"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ComparisonChart;
