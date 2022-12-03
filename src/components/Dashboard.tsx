import { Tabs } from "antd";
import React, { useState } from "react";

import Chart from "react-apexcharts";

function Dashboard() {
  const [options, setOptions] = useState({
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    },
  });
  const [series, setSeries] = useState([
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ]);

  return (
    <>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="Subscription" key="1">
          <Chart options={options} series={series} type="line" width="500" />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Revenue" key="2">
          Content of Tab Pane 2
        </Tabs.TabPane>
      </Tabs>
    </>
  );
}
export default Dashboard;
