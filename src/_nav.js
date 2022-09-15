import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    BarChartOutlined,
    LineChartOutlined
  } from '@ant-design/icons';
  import { Button, Menu } from 'antd';
  import React, { useState } from 'react';
  
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  
  const items = [


    getItem('Bar Chart', '/barchart', <BarChartOutlined />),
    getItem('Stack Area', '/stackarea', <LineChartOutlined />),
    getItem('Donut Chart', '/donutchart',<PieChartOutlined />),
   
  ];

  export default items