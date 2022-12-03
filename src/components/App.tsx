import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Posts from "./Posts";
import Settings from "./Settings";

const { Header, Sider, Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);

  const getDefaultKey = () => {
    const pathName = window.location.pathname;
    let key = "";
    if (pathName === "/") {
      key = "1";
    }
    if (pathName === "/posts") {
      key = "2";
    }
    if (pathName === "/settings") {
      key = "3";
    }
    return key;
  };

  return (
    <Router>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu
            theme="dark"
            defaultSelectedKeys={[getDefaultKey()]}
            mode="inline"
          >
            <Menu.Item key="1">
              <span>Dashboard</span>
              <Link to="/" />
            </Menu.Item>
            <Menu.Item key="2">
              <span>Posts Management</span>
              <Link to="/posts" />
            </Menu.Item>
            <Menu.Item key="3">
              <span>Settings</span>
              <Link to="/settings" />
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: () => setCollapsed(!collapsed),
              }
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: "100vh",
            }}
          >
            <Routes>
              <Route path="/" element={<Dashboard />}></Route>
              <Route path="posts" element={<Posts />} />
              <Route path="settings" element={<Settings />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>{" "}
    </Router>
  );
}

export default App;
