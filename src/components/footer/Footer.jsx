import React from "react"
import styled from "styled-components"

const Copyright = styled.div`
	font-family: Verdana, Sans-serif;
	background-color: transparent;
	font-size: 12px;
	display: flex;
	justify-content: flex-end;
	flex-direction: column;
	margin-bottom: 10px;
`

const FooterSection = styled.footer`
	width: 100%;
	height: 250px;
	background-color: #f2f2f2;
	display: flex;
	align-itens: center;
	justify-content: center;
`

function Footer() {
	return (
		<FooterSection>
			<Copyright>&copy; 2022 made by Pedro Araujo</Copyright>
		</FooterSection>
	)
}

export default Footer
