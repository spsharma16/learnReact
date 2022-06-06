// import React from "react";
// import ReactDom from "react-dom";

// const num = 16;

// ReactDom.render(
//   <div>
// <h1>HELLO {"Sp"}!</h1>
// <p>Your lucky no. is {num}.</p>
//  </div>,
//  document.getElementById("root")
// );

// Challenge

import React from "react";
import ReactDom from "react-dom";

const name = "Sp Sharma";
const num = new Date().getFullYear();
console.log(Date());
ReactDom.render(
  <div>
    <p>Created by {name} .</p>
    <p>CopyRight {num}.</p>
  </div>,
  document.getElementById("root")
);
