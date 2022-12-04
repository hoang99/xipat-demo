import { Tabs } from "antd";
import { useNavigate } from "react-router-dom";
import ColumnChart from "./ColumnChart";
import LineChart from "./LineChart";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <>
      <Tabs
        defaultActiveKey="line-chart"
        onChange={(path) => {
          navigate(`../dashboard/${path}`);
        }}
      >
        <Tabs.TabPane tab="Subscription" key="line-chart">
          <LineChart />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Revenue" key="column-chart">
          <ColumnChart />
        </Tabs.TabPane>
      </Tabs>
    </>
  );
}
export default Dashboard;
