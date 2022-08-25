import styled from "styled-components"

export const HeaderName = styled.div`
	font-family: proxima-nova, Sans-serif;
	font-size: 18px;
	font-weight: normal;
	line-height: 1.7em;

	@media (max-width: 800px) {
		text-align: center;
		margin: auto;
	}
`

export const HeaderSection = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	width: 100%;
	height: 70px;
	background-color: #f2f2f2;

	@media (max-width: 800px) {
		flex-direction: column;
	}
`

export const HeaderNavbar = styled.div`
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
