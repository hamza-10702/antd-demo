import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import BarChart from "./screens/Bar_Chart";

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/barchart" element={<BarChart />} />
    </Routes>
  </BrowserRouter>
);
