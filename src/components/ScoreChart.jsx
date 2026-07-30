import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

function ScoreChart({ progress }) {
  const data = {
    labels: progress.map((_, index) => `Try Out ${index + 1}`),

    datasets: [
      {
        label: "Nilai",
        data: progress.map((item) => item.nilai),
        borderColor: "#005BAC",
        backgroundColor: "#005BAC",
        tension: 0.35,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return <Line data={data} options={options} />;
}

export default ScoreChart;