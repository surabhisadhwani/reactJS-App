import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import PagesRoute from "./pages.route";
import { Button, IconButton, Toolbar, Typography } from "@material-ui/core";
import { AppBar } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import "./pages.scss";
import SidebarComponent from "../shared/sidebar/sidebar";

const PagesComponent = (props: any) => {
  return (
    <div>
      <SidebarComponent pageRoutes={PagesRoute} />
      {/* <Router>{PagesRoute(props)}</Router> */}
    </div>
  );
};

export default PagesComponent;
