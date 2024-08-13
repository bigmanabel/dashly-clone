import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const TotalsLineChart = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Total Income",
        data: [
          400, 1000, 1000, 2500, 3000, 1500, 4000, 5000, 8000, 6000, 5500, 6500,
        ],
        fill: true,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 5,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            return `$${context.raw.toLocaleString()}`;
          },
        },
        position: "nearest",
        external: function (context) {
          const { tooltip } = context;
          if (!tooltip) return;
          tooltip.yAlign = "bottom";
          tooltip.xAlign = "center";
        },
      },
      legend: {
        display: false,
      },
    },
    elements: {
      point: {
        radius: 5,
        hoverRadius: 7,
      },
    },
  };

  return (
    <Line
      data={data}
      options={options}
      width={100}
      height={70}
      className="overflow-clip block box-border"
    />
  );
};

export default TotalsLineChart;
