import React, { useState } from "react"
import { Link } from "react-router-dom"
import "../navbar/Navbar.css"
import ReorderIcon from "@material-ui/icons/Reorder"

function Navbar() {
	const [openLinks, setOpenLinks] = useState(false)

	const toggleNavbar = () => {
		setOpenLinks(!openLinks)
	}

	return (
		<>
			<div className="navbar">
				<div className="leftSide" id={openLinks ? "open" : "close"}>
					<Link to="/" className="myName">
						Pedro Araujo
					</Link>
					<div className="hiddenLinks">
						<Link to="/"> Home </Link>
						<Link to="/projetos"> Projetos </Link>
						<Link to="/sobre"> Sobre Mim </Link>
						<Link to="/contato"> Contato </Link>
					</div>
				</div>
				<div className="rightSide">
					<Link to="/"> Home </Link>
					<Link to="/projetos"> Projetos </Link>
					<Link to="/sobre"> Sobre Mim </Link>
					<Link to="/contato"> Contato </Link>
					<button onClick={toggleNavbar}>
						<ReorderIcon />
					</button>
				</div>
			</div>
		</>
	)
}

export default Navbar

/* 
Link é um componente do Router-Dom para fazer links similar ao html mas melhor.
a prop to descreve pra onde ele vai
*/
