import React from 'react';
import { Pie } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';

function PieChart({ userData }) {
    return <Pie data={userData} />;
}

export default PieChart;