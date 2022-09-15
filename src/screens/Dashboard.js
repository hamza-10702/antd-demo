import React, { useEffect, useState } from "react";
import Home from "./Home";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setToDoData, unSetToDoData } from "../features/toDoSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState();

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
    const interval = setInterval(fetchData, 3000);
    console.log(interval);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Home>
        <>
          {data?.map((data) => {
            return (
              <div key={data.id}>
                <h3>{data.userId}</h3>
                <h3>{data.id}</h3>
                <h3>{data.title}</h3>
                <h3>{data.completed}</h3>
              </div>
            );
          })}
        </>
      </Home>
    </>
  );
};

export default Dashboard;
