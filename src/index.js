import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from 'react-router-dom'
import CustomeComponent from './components/context/cartContext'

ReactDOM.render(
  <BrowserRouter>
    <CustomeComponent>
        <App />
    </CustomeComponent> 
  </BrowserRouter>,
  document.getElementById('root')
);

