import React from "react";
import reactDom from "react-dom";

const Elemento =()=> <p>Hola Mundo</p>

reactDom.render(<Elemento/>,document.getElementById("root"))