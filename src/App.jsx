import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import GlobalStyle from "./globalStyles"
import Header from "./components/header/Header"
import Home from "./pages/home/Home"
import Footer from "./components/footer/Footer"

function App() {
	return (
		<div>
			<Router>
				<Header />
				<GlobalStyle />
				<Routes>
					<Route exact path="/" element={<Home />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	)
}

export default App
