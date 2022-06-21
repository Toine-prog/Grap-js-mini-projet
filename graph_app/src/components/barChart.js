import React from 'react';
import { Bar } from 'react-chartjs-2';

function barChart({userData}) {
    return <div><Bar data={userData}/></div>
}

export default barChart;