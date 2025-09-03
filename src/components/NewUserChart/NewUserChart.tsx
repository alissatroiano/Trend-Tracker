import { Component } from "react";
import Chart from "react-apexcharts";
import './NewUserChart.css';

interface Props {
  darkMode: boolean;
  lightMode: boolean;
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
    colors: [darkMode ? '#13af69ff' : '#13af69ff'],
    grid: {
      borderColor: darkMode ? '#e7e7e794' : '#8e8e8eff',
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
        style: {
          colors: darkMode ? '#c085ffff' : '#0a0a0a', // axis labels yellow in dark mode
          fontSize: "9.58px",
          fontWeight: "medium",
          transform:'rotate(-45)',

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
              width="100%"
              height={300}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default NewUserChart;
