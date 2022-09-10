
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router } from "react-router-dom"
import { BacklineBuilder } from "./components/BacklineBuilder"
import reportWebVitals from './reportWebVitals'
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            <BacklineBuilder />
        </Router>
    </React.StrictMode>
);

reportWebVitals();