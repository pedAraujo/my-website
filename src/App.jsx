import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./pages/home/Home"

function App() {
	return (
		<div className="app">
			<Router>
				<Routes>
					<Route exact path="/" element={<Home />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
