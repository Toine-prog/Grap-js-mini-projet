import './App.css';
import React from 'react';
import { UserData } from "./data.js"
import  BarChart  from "./components/BarChart";
import LineChart  from "./components/LineChart";
import  PieChart  from "./components/PieChart";
import {Chart as ChartJS} from 'chart.js/auto'

function App() {

  const data = {
    labels: UserData.map((user) => user.year),
    datasets: {
      label: "graph title",
      data: UserData.map((user) => user.nbUser),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }
  };

  return (
    <div className="App">
      <div style={{width: 700}}>
        <BarChart userData={data}/>
      </div>
      <div style={{width: 700}}>
        <LineChart userData={data}/>
      </div>
      <div style={{width: 700}}>
        <PieChart userData={data}/>
      </div>
    </div>
  );
}

export default App;
