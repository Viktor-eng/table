import React from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import CartContainer from "./CartContainer";

var destination = document.querySelector("#container");
var root = createRoot(destination);

root.render(
    <CartContainer/>
);