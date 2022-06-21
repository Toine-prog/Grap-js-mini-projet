
import "./App.css";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import { UserData } from "./Data";

function App() {
  const userData = {
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "#f4394d",
          "#f88644",
          "#17b3fe",
          "#a33af9",
          "#5e4ff7",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="container">
      <div>
        <div style={{ width: 700 }}>
          <BarChart chartData={userData} />
        </div>
        <div style={{ width: 700 }}>
          <LineChart chartData={userData} />
        </div>
      </div>
      <div style={{ width: 500 }}>
        <PieChart chartData={userData} />
      </div>
    </div>
  );
}

export default App;
