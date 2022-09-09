
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { BacklineBuilder } from "./components/BacklineBuilder.js"
import "./index.css"

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <BacklineBuilder />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)