import React from "react"
import homePhoto from "../../assets/homePhoto.jpeg"
import "./Home.css"

function Home() {
	return (
		<div className="home">
			<div className="main-photo-container">
				<img src={homePhoto} />
				<h2 class="main-photo-title">Hi, I'm Pedro Araujo.</h2>
			</div>
		</div>
	)
}

export default Home
