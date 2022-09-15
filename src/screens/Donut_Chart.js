import React, { useState, useEffect } from "react";
import Home from "./Home";
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Button } from "antd";

ChartJs.register(Tooltip, Title, ArcElement, Legend);
const DonutChart = () => {
  const navigate = useNavigate();
  const result = useSelector((state) => state.toDo);
  const [data, setData] = useState({
    datasets: [
      {
        data: [10, 20, 30],
        backgroundColor: ["red", "blue", "yellow"],
      },
    ],
    labels: ["Red", "Yellow", "Blue"],
  });

  const getDataFromRedux = async () => {
    try {
      if (result) {
        console.log(result.data);
        const label = [];
        const data = [];
        for (var i of result.data) {
          label.push(i.name);
          data.push(i.id);
        }
        setData({
          datasets: [
            {
              data: data,
              backgroundColor: ["red", "Violet", "Gray"],
            },
          ],
          labels: label,
        });
      }
    } catch (err) {}
  };

  useEffect(() => {
    getDataFromRedux();
  }, []);

  return (
    <>
      <Home componentName="Doughnut Chart"> 
        <div style={{ float: "right", marginRight: "10px", marginTop: "10px" }}>
          <Button style={{color:'#001529'}} onClick={()=>{
            navigate('/barchart')
          }}>Home</Button>
        </div>
        <div
          className="App"
          style={{ width: "450px", height: "450px", marginLeft: "300px" }}
        >
          <h1
            style={{
              fontSize: "25px",
              fontWeight: "bold",
            }}
          >
            DOUGHNUT CHART
          </h1>
          <Doughnut data={data} />
        </div>
      </Home>
    </>
  );
};

export default DonutChart;
