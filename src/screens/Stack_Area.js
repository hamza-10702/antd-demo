import React from "react";
import Home from "./Home";
import { useSelector } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const StackArea = () => {
  const { data } = useSelector((state) => state.toDo);

  console.log(data);
  return (
    <>
      <Home  componentName = 'Area Stack'>
        <div>
        <h1
            style={{
              textAlign:'center',
              fontSize: "25px",
              fontWeight: "bold",
            }}
          >
            {" "}
            AREA STACK
          </h1>
          <AreaChart
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
            <Area
              type="monotone"
              dataKey="id"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </div>
      </Home>
    </>
  );
};

export default StackArea;
