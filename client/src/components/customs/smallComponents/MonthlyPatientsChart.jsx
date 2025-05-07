import React, { useRef, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Filler
);

const MonthlyPatientsChart = () => {
  const chartRef = useRef(null);

  const data = {
    labels: [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ],
    datasets: [
      {
        label: 'Monthly Patients Count',
        data: [30, 40, 35, 50, 60, 70, 90, 80, 85, 95, 100, 120],
        fill: true,
        backgroundColor: 'rgba(74, 144, 226, 0.2)',
        borderColor: '#4A90E2',
        tension: 0.4
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false
  };

  useEffect(() => {
    // ✅ Cleanup Chart instance to avoid "canvas already in use" error
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="bg-white rounded-lg p-4 shadow-md h-[400px]">
      <h2 className="text-xl font-semibold mb-4">Monthly Patients Count</h2>
      <div className="overflow-x-auto">
      <div className="min-w-[500px] h-[300px]">
      <Line ref={chartRef} data={data} options={options} />
      </div>
      </div>
      
    </div>
  );
};

export default MonthlyPatientsChart;
