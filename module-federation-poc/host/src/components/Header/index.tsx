import { Layout, Menu } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const { Header: AntHeader } = Layout;

const dummyItems = new Array(15).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));

export default function Header() {
  const nav = useNavigate();
  const items = [
    {
      key: "users",
      label: "Users",
      onClick: () => nav("users"),
    },
  ];
  return (
    <AntHeader style={{ display: "flex", alignItems: "center" }}>
      <div className="demo-logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={[...items, ...dummyItems]}
        style={{ flex: 1, minWidth: 0 }}
      />
    </AntHeader>
  );
}
