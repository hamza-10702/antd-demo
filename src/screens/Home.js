import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import React, { useState } from "react";
import items from "../_nav";
import "antd/dist/antd.css";
import "../assets/style.css";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

const Home = ({ children, componentName }) => {
  const [pathName, setPathName] = useState("");

  let navigate = useNavigate();

  const changePath = ({ key }) => {
    navigate(key);
    setPathName(key);
    console.log(children);
    console.log(componentName);
  };
  return (
    <>
      <Layout>
        <Header className="header">
          <div className="logo">
            <h2
              style={{
                color: "white",
              }}
            >
              Demo Application
            </h2>
          </div>
          <Menu theme="dark" mode="vertical" defaultSelectedKeys={["2"]} />
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <h2
              style={{
                marginLeft: "30px",
                marginTop: "10px",
                fontWeight: "bold",
              }}
            >
              DashBoard
            </h2>
            <Menu
              defaultSelectedKeys={["/"]}
              defaultOpenKeys={["/"]}
              mode="inline"
              theme="light"
              items={items}
              onClick={changePath}
            />
          </Sider>
          <Layout
            style={{
              padding: "0 24px 24px",
            }}
          >
            <Breadcrumb
              style={{
                margin: "16px 0",
              }}
            >
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>{componentName}</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                margin: 0,
                minHeight: 600,
              }}
            >
              {children}
            </Content>
            <Footer
              style={{
                height: '30px',
                textAlign: "center",
              }}
            >
              <h2
                style={{
                  marginLeft: "30px",
                  marginTop: "10px",
                  fontWeight: "bold",
                }}
              >
                Created By Hafiz Hamza
              </h2>
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
};

export default Home;
