import React from "react"
import styled from "styled-components"

const HeaderName = styled.div`
	font-family: proxima-nova, Sans-serif;
	font-size: 18px;
	font-weight: normal;
	line-height: 1.7em;
`

const HeaderSection = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	width: 100%;
	height: 70px;
	background-color: #f2f2f2;
`

const HeaderNavbar = styled.div`
	display: flex;
	gap: 32px;
`
/*
const Link = styled.a`
	font-family: Verdana, Sans-serif;
	font-size: 18px;
	font-weight: normal;
	line-height: 1.7em;
`
*/

function Header() {
	return (
		<HeaderSection>
			<HeaderName>
				PEDRO <strong>ARAUJO</strong>
			</HeaderName>
			<HeaderNavbar>
				{/*
				<Link>Home</Link>
				<Link>About</Link>
				<Link>Projects</Link>
				<Link>Contact</Link>
					*/}
			</HeaderNavbar>
		</HeaderSection>
	)
}

export default Header
