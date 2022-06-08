import React from "react";

import classes from "./Modal.css";
import Aum from "../../../hoc/Aum";
import Backdrop from "../Backdrop/Backdrop";

const modal = (props) => (
  <Aum>
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
    >
      {props.children}
    </div>
  </Aum>
);

export default modal;
