"use client";

import { useRef } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function ReportChart() {
  const chartRef = useRef<ChartJS<"line">>(null);

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 50,
        ticks: {
          stepSize: 10,
        },
      },
    },
    elements: {
      line: {
        tension: 0.4,
      },
      point: {
        radius: 0,
      },
    },
  };

  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const data = {
    labels,
    datasets: [
      {
        label: "Batch 1",
        data: [18, 30, 25, 40, 30, 25, 30],
        borderColor: "#FCD34D",
        backgroundColor: "#FCD34D",
      },
      {
        label: "Batch 2",
        data: [12, 5, 20, 15, 30, 40, 40],
        borderColor: "#FB923C",
        backgroundColor: "#FB923C",
      },
      {
        label: "Batch 3",
        data: [5, 10, 15, 20, 35, 30, 35],
        borderColor: "#F97316",
        backgroundColor: "#F97316",
      },
    ],
  };

  return (
    <div className="h-[300px]">
      <Line ref={chartRef} options={options} data={data} />
    </div>
  );
}
