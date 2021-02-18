import React from "react";
import StyleHOC from "./StyleHOC";

const GoodButton = (props) => {
  return (
    <button {...props} style={props.style}>
      {props.text ? props.text : "Good Button"}
    </button>
  );
};

export default StyleHOC(GoodButton);
