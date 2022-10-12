import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./pages/home/Home"
import Frontend from "./pages/frontend/Frontend"

function App() {
	return (
		<div className="app">
			<Router>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/frontend" element={<Frontend />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
