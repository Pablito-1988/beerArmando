import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from 'react-router-dom'
import CustomeComponent from './components/context/cartContext'
import UserCustomeComponent from './components/context/userContext'

ReactDOM.render(
  <BrowserRouter>
    <UserCustomeComponent>
    <CustomeComponent>
        <App />
    </CustomeComponent> 
    </UserCustomeComponent>
  </BrowserRouter>,
  document.getElementById('root')
);

