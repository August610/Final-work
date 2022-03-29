import React from "react";
import ReactDOM from "react-dom";
import 'antd/dist/antd.css';
import './index.css';
import { AppAnt } from './AppAnt';
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
    <BrowserRouter>
        <AppAnt />
    </BrowserRouter>
    , document.querySelector("#root"));
