import { Bar } from "react-chartjs-2";

const SalesBarChart = () => {
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
        label: "Projections",
        data: [
          12440, 15021, 10081, 10984, 8409, 12532, 13986, 19227, 12636, 10171,
          6753, 15589,
        ],
        backgroundColor: "rgba(0, 186, 199, 1)",
        barPercentage: 0.3,
      },
      {
        label: "Actual",
        data: [
          12357, 13665, 9071, 9914, 5115, 12291, 10010, 19092, 11976, 9174,
          5189, 14523,
        ],
        backgroundColor: "rgba(246, 247, 248, 1)",
        barPercentage: 0.3,
        borderRadius: 10,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        stacked: true,
      },

      y: {
        stacked: true,
        beginAtZero: true,
        border: {
          display: false,
        },
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
          tooltip.yAlign = "center";
          tooltip.xAlign = "center";
        },
      },
      legend: false,
    },
  };

  return (
    <Bar
      data={data}
      options={options}
      width={854}
      height={310}
      className="overflow-clip block box-border p-5 -mx-5"
    />
  );
};

export default SalesBarChart;
