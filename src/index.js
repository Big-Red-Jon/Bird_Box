import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { BirdBox } from "./components/BirdBox.js"
import "./index.css"

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <BirdBox />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)
