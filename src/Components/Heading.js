import React from "react";

export default function Heading(props) {
  return (
    <div className="head">
      <marquee direction="left" scrollamount="8">
        <h1 className="text-center" style={{ color: "white" }}>
          {props.title}
          <span style={{ marginLeft: "220px" }}>{props.title}</span>
          <span style={{ marginLeft: "220px" }}>{props.title}</span>
        </h1>
      </marquee>
    </div>
  );
}
