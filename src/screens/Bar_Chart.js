import React, { useEffect, useState } from "react";
import Home from "./Home";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setToDoData, unSetToDoData } from "../features/toDoSlice";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from "recharts";

const BarCharts = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const [seconds, setSeconds] = useState(1);

  useEffect(() => {
    var timer = setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);

    if (seconds === 4) {
      setSeconds(1);  
    }

    return () => clearInterval(timer);
  });

  const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/users",
  });

  const fetchData = async () => {
    try {
      const response = await client.get();
      const { data } = response;
      if (data) {
        dispatch(unSetToDoData([]));

        dispatch(setToDoData(data));
        setData(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {  
    fetchData();
    const interval = setInterval(fetchData, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Home componentName="BarChart">
        <>
          <div>
            <h1
              style={{
                textAlign: "center",
                fontSize: "25px",
                fontWeight: "bold",
              }}
            >
              {" "}
              BAR CHART
            </h1>
            <div>
              <h3
                style={{
                  textAlign: "center",
                  fontSize: "20px",
                  color: "red",
                  fontWeight: "700",
                }}
              >
                <p>
                  Fetch Data every
                  <span
                    style={{
                      fontSize: "40px",
                      color: "red",
                      fontWeight: "bold",
                    }}
                  >
                    {` ${seconds} `}
                  </span>
                  seconds
                </p>
              </h3>

             
            </div>
            <BarChart
              width={1000}
              height={500}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="id" fill="#82ca9d" />
            </BarChart>
          </div>
        </>
      </Home>
    </>
  );
};

export default BarCharts;
