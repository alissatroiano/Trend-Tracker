import { Component } from "react";
import Chart from "react-apexcharts";
import './NewUserChart.css';

interface Props {
  darkMode: boolean;
}

interface State {
  options: any;
  series: any[];
}

class NewUserChart extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    const fullData = [3, 5, 1, 0, 2, 7, 1, 9, 13, 3, 5, 6, 1, 0];
    const data = fullData.slice(-10);

    this.state = {
      options: this.getOptions(props.darkMode, data),
      series: [
        {
          name: "New Users",
          data: data,
        },
      ],
    };
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.darkMode !== this.props.darkMode) {
      const fullData = [3, 5, 1, 0, 2, 7, 1, 9, 13, 3, 5, 6, 1, 0];
      const data = fullData.slice(-10);
      this.setState({ options: this.getOptions(this.props.darkMode, data) });
    }
  }

getOptions(darkMode: boolean, data: number[]) {
  return {
    chart: { id: "basic-bar", background: 'transparent', toolbar: { show: false } },
    colors: [darkMode ? '#ffcf21ff' : '#00E396'], // bars are yellow in dark mode
    grid: {
      borderColor: darkMode ? '#e7e7e794' : '#cccccc',
      strokeDashArray: 3,
    },
    plotOptions: { bar: { borderRadius: 4, columnWidth: "60%" } },
    xaxis: {
      categories: Array.from({ length: data.length }, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() - (data.length - 1 - i));
        return date.toLocaleDateString("en-US", { month: "2-digit", day: "2-digit" });
      }),
      labels: {
        rotate: -45,
        style: {
          colors: darkMode ? '#ffcf21ff' : '#333', // axis labels yellow in dark mode
          fontSize: "9.58px",
          fontWeight: "medium",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: darkMode ? '#ffcf21ff' : '#333', // y-axis labels yellow in dark mode
          fontSize: "9.5px",
          fontWeight: "bold",
        },
      },
    },
    tooltip: {
      theme: darkMode ? 'dark' : 'light',
      style: { fontSize: "12px", fontFamily: "Futura-PT, sans-serif" },
      x: { show: true },
      y: { formatter: (val: number) => `${val} users` },
    },
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
              height={300}
              maxWidth="100%"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default NewUserChart;
