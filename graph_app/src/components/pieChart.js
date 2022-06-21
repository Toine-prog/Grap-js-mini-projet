import React from 'react';
import { Pie } from 'react-chartjs-2';

function pieChart({userData}) {
    return <div><Pie data={userData}/></div>
}

export default pieChart;