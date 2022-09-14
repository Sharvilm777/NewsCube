import React, { Component } from "react";
import spinner from "/Learning/codeMonkey/src/spinner.gif";

export default class Spinner extends Component {
  render() {
    return (
      <div
        className=""
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={spinner} alt="" />
      </div>
    );
  }
}
