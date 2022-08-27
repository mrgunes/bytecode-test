import { Layout } from "antd";
import React from "react";
import { Sidebar } from "../components";
const { Content } = Layout;
const DefaultLayout = ({ children }) => {
  return (
    <Layout hasSider>
      <Sidebar />
      <Layout
        style={{
          marginLeft: 200,
        }}
      >
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
