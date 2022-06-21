import React from 'react';
import { Line } from 'react-chartjs-2';

function lineChart({userData}) {
    return <div><Line data={userData}/></div>
}

export default lineChart;