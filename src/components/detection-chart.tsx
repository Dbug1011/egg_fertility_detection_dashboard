"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  type ChartOptions,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export function DetectionChart() {
  const chartRef = useRef<ChartJS<"doughnut">>(null);

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    cutout: "55%",
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
    rotation: -90, // Start from top
    circumference: 360,
  };

  const data = {
    labels: ["Fertile", "Infertile"],
    datasets: [
      {
        data: [70, 30],
        backgroundColor: [
          "#FBBF24", // Bright yellow/amber for Fertile
          "#FB923C", // Orange for Infertile
        ],
        borderWidth: 0,
        hoverBackgroundColor: ["#FBBF24", "#FB923C"],
      },
    ],
  };

  return (
    <div className="relative h-[220px] flex items-center justify-center">
      <Doughnut ref={chartRef} options={options} data={data} />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full">
          {/* Infertile label positioned in the orange section (left side) */}
          <div className="absolute top-8 left-4 text-center">
            <div className="text-lg">�</div>
            <div className="text-sm font-bold text-gray-800">Infertile</div>
          </div>

          {/* Fertile label positioned in the yellow section (right side) */}
          <div className="absolute top-8 right-4 text-center">
            <div className="text-lg">�</div>
            <div className="text-sm font-bold text-gray-800">Fertile</div>
          </div>

          {/* Center area - positioned in the middle of the chart */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-12 h-12 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full flex items-center justify-center shadow-lg border-2 border-yellow-400"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-2xl">🥚</span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
