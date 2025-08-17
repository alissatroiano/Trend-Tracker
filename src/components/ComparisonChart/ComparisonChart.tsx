import { Component } from "react";
import Chart from "react-apexcharts";
import './ComparisonChart.css';

interface Props {
  darkMode: boolean;
}

interface State {
  options: any;
  series: any[];
}

class ComparisonChart extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    const fullData = [2, -3, 5, 1, -1, 0, -2, 4, 1, -2, 5, 7, -3, 0, 1, -1];
    const data = fullData.slice(-10);

    const gains = data.map(val => (val > 0 ? val : 0));
    const losses = data.map(val => (val < 0 ? Math.abs(val) : 0));

    this.state = {
      options: this.getOptions(props.darkMode, data),
      series: [
        { name: "Users Gained", data: gains },
        { name: "Users Lost", data: losses }
      ]
    };
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.darkMode !== this.props.darkMode) {
      const fullData = [2, -3, 5, 1, -1, 0, -2, 4, 1, -2, 5, 7, -3, 0, 1, -1];
      const data = fullData.slice(-10);
      this.setState({ options: this.getOptions(this.props.darkMode, data) });
    }
  }

  getOptions(darkMode: boolean, data: number[]) {
    return {
      chart: {
        id: "users-gained-lost",
        background: 'transparent',
        toolbar: { show: false }
      },
      colors: ['#00E396', '#FF4560'], // stays consistent
      xaxis: {
        categories: Array.from({ length: data.length }, (_, i) => {
          const date = new Date();
          date.setDate(date.getDate() - (data.length - 1 - i));
          return date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' });
        }),
        labels: {
          rotate: -45,
          style: {
            colors: darkMode ? '#ffcf21ff' : '#333',
            fontSize: '9.58px'
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: darkMode ? '#ffcf21ff' : '#333'
          }
        },
        min: 0
      },
      grid: {
        borderColor: darkMode ? '#e7e7e794' : '#cccccc'
      },
      tooltip: {
        theme: darkMode ? 'dark' : 'light',
        style: {
          fontSize: '12px',
          fontFamily: 'Futura-PT, sans-serif'
        }
      }
    };
  }

  render() {
    return (
      <div className="app">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="line"
          width={"400px"}
          height={322}
        />
      </div>
    );
  }
}


export default ComparisonChart;
