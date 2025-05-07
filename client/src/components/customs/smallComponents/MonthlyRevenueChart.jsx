import React, { useRef, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
);

function MonthlyRevenueChart() {
    const chartRef = useRef(null);

    const data = {
        labels: [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ],
        datasets: [
            {
                label: 'Monthly Revenue (₹)',
                data: [
                    10000, 12000, 15000, 18000, 20000, 22000,
                    25000, 27000, 30000, 32000, 35000, 40000
                ],
                backgroundColor: '#1b4965'
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false
    };

    // ✅ Cleanup previous chart instance on unmount
    useEffect(() => {
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, []);

    return (
        <div className="bg-white rounded-lg p-4 shadow-md h-[400px]">
            <h2 className="text-xl font-semibold mb-4">Monthly Revenue</h2>
            <div className="overflow-x-auto">
                <div className="min-w-[500px] h-[300px]">
                    <Bar ref={chartRef} data={data} options={options} />
                </div>
            </div>
        </div>
    );
}

export default MonthlyRevenueChart;
