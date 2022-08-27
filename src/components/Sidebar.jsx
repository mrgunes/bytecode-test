import React from "react";
import { LogoText, SidebarMenu, SidebarWrapper } from "./sidebar.styles";

const Sidebar = () => {
  const getItem = (label, key, icon, children) => {
    return {
      key,
      icon,
      children,
      label,
    };
  };

  const items = [
    getItem('ADDRESS BOOK', '1', null)
  ]

  return (
    <SidebarWrapper
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <LogoText>React JS</LogoText>
      <SidebarMenu
        defaultSelectedKeys={["1"]}
        mode={"vertical"}
        items={items}
      />
    </SidebarWrapper>
  );
};

export default Sidebar;
