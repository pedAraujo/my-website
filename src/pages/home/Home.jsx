import React from "react"
import "./Home.css"
import profilePic from "../../assets/profilePic.svg"
import hexThree from "../../assets/hex3.svg"
import hex from "../../assets/hex.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faFacebook,
	faLinkedin,
	faInstagram,
	faGithub,
} from "@fortawesome/free-brands-svg-icons"
import { Link } from "react-router-dom"

function Home() {
	return (
		<>
			<div className="hexagon-container">
				<div className="hexbox">
					<img className="hex3" alt="Not found" src={hexThree} />
				</div>
				<div className="hexbox">
					<img className="hex" alt="Not found" src={hex} />
				</div>
			</div>
			<div className="header-container">
				<div className="header-text">
					<p>I create, fix and tinker</p>
					<p>with technology to find</p>
					<p>solutions and help others.</p>
				</div>
			</div>
			<div className="presentation-container">
				<img className="profile-picture" alt="Not found" src={profilePic} />
				<div className="profile-grid">
					<div className="profile-text">
						<h3>From atoms to rockets</h3>
						<div className="profile-text-body">
							<p>I'm Pedro Araujo, programmer,</p>
							<p>aerospace engineer, physicist,</p>
							<p>scientist and artist located in São Paulo.</p>
						</div>
					</div>
				</div>
			</div>
			<div className="welcome-container">
				<h2 className="welcome-text">Welcome to my space on the internet</h2>
				<div className="welcome-grid">
					<Link to="/frontend" className="box-one" style={linkStyle}>
						<h3>Frontend development</h3>
						<p>
							I write HTML, CSS and JS using Node, React and React Native to
							develop solutions for the web and mobile. I am aiming to become a
							fully fledged software engineer. If you have a project that could
							use my help, please reach out.
						</p>
					</Link>
					<div className="box-two">
						<h3>Teams & Collaborations</h3>
						<p>
							I've had the opportunity to meet and collaborate with some amazing
							people to think, plan and execute awesome projects. I helped
							building a cubesat satellite, a sounding rocket, an AI chatbot, a
							hydrogen electric racing car, mobile games and apps, & more
						</p>
					</div>
					<div className="box-three">
						<h3>Side Projects</h3>
						<p>
							I aim to make cool stuff my next business. Websites, apps, robots,
							automation, physics modeling, CAD design, graphic and video
							editing, drawing, project management and much more. Stick around
							to find out what I'm currently working on.
						</p>
					</div>
					<div className="box-four">
						<h3>Writing</h3>
						<p>
							I am known for drawing on complex bodies of knowledge to tackle
							mind puzzles and weird questions. I enjoy sharing and commenting
							on anything using straightforward logic and the scientific mental
							framework on my blog.
						</p>
					</div>
				</div>
			</div>
			<div className="social-media-container">
				<h2 className="around-the-web">Around the web</h2>
				<div className="honeycomb">
					<div className="ibws-fix">
						<a
							className="hexagon"
							href="https://github.com/pedAraujo"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div className="hexagontent">
								<FontAwesomeIcon
									icon={faGithub}
									size="5x"
									style={{ color: (0, 0, 0) }}
								/>
							</div>
						</a>
						<a
							className="hexagon"
							href="https://www.linkedin.com/in/pedaraujo/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div className="hexagontent">
								<FontAwesomeIcon
									icon={faLinkedin}
									size="5x"
									style={{ color: (0, 0, 0) }}
								/>
							</div>
						</a>
						<a
							className="hexagon"
							href="https://www.facebook.com/p3d90"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div className="hexagontent">
								<FontAwesomeIcon
									icon={faFacebook}
									size="5x"
									style={{ color: (0, 0, 0) }}
								/>
							</div>
						</a>
						<a
							className="hexagon"
							href="https://www.instagram.com/ped_araujo/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div className="hexagontent">
								<FontAwesomeIcon
									icon={faInstagram}
									size="5x"
									style={{ color: (0, 0, 0) }}
								/>
							</div>
						</a>
					</div>
				</div>
			</div>
			<div className="footer">
				<h4>2022 &copy; Pedro Araujo</h4>
			</div>
		</>
	)
}

export default Home

const linkStyle = {
	textDecoration: "none",
}
