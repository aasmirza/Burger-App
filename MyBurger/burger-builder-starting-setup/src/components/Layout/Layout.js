import React from "react";
import Toolbar from "../Toolbar/Toolbar";
import Aum from "../../hoc/Aum";
import classes from "./Layout.css";
import SideDrawer from "../NavigationItems/SideDrawer/SideDrawer";
const layout = (props) => (
  <Aum>
    <Toolbar />
    <SideDrawer />
    <main className={classes.Content}>{props.children}</main>
  </Aum>
);

export default layout;
