import { Layout } from "antd";
import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import { Content } from "antd/es/layout/layout";
import Footer from "../../components/Footer";

export default function DefaultLayout() {
  return (
    <Layout>
      <Header />
      <Suspense>
        <Content>
          <Outlet />
        </Content>
      </Suspense>
      <Footer />
    </Layout>
  );
}
