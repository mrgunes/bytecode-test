import { Layout, Menu } from "antd";
import styled from "styled-components";

export const SidebarWrapper = styled(Layout.Sider)`
  background-color: #4051b5;
  color: #ffffff;
  padding: 5px;
`;

export const LogoText = styled.div`
  text-transform: uppercase;
  text-align: center;
  font-size: 24px;
`;

export const SidebarMenu = styled(Menu)`
  &.ant-menu {
    border-right: 0;
    .ant-menu-vertical {
      .ant-menu-item {
        margin: 0;
        padding: 0;
        &.ant-menu-item-selected {
          background-color: #3d4ead;
        }
      }
    }
  }
  .ant-menu-item {
    margin: 0;
    &.ant-menu-item-selected {
      background-color: #3d4ead;
    }
  }
  .ant-menu-item-selected {
    color: #ffffff;
  }
`;
