import "./App.css";
import Home from "./screens/Home";
import BarChart from "./screens/Bar_Chart";
import StackArea from "./screens/Stack_Area";
import DonutChart from "./screens/Donut_Chart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BarChart />} />
        <Route path="/barchart" element={<BarChart />} />
        <Route path="/stackarea" element={<StackArea />} />
        <Route path="/donutchart" element={<DonutChart />} />
      </Routes>
    </Router>
  );
}

export default App;
