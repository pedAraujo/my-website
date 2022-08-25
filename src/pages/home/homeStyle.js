import styled from "styled-components"
import Instagram from "@material-ui/icons/Instagram"
import Facebook from "@material-ui/icons/Facebook"
import Twitter from "@material-ui/icons/Twitter"
import LinkedIn from "@material-ui/icons/LinkedIn"

export const WelcomeSection = styled.section`
	width: 100%;
	height: 500px;
	background-color: transparent;
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-top: 150px;
	position: relative;

	@media (max-width: 800px) {
		flex-direction: column;
		margin: auto;
		height: 1000px;
	}
`

export const MyPhotoSection = styled.div`
	position: relative;
	width: 100%;
	height: 500px;
	background-color: transparent;
	display: flex;
	align-items: flex-end;
	justify-content: center;

	@media (max-width: 800px) {
		height: 400px;
		margin: auto;
	}
`
export const MyPhoto = styled.img`
	height: 525px;
	background-color: transparent;
	z-index: 2;
	position: absolute;

	@media (max-width: 800px) {
		height: 400px;
		margin: auto;
	}
`

export const PhotoSquares = styled.img`
	background-color: transparent;
	position: absolute;
	height: 590px;
	margin-left: 80px;
	margin-bottom: -55px;
	z-index: 1;

	@media (max-width: 800px) {
		height: 400px;
		margin: auto;
	}
`

export const WelcomeTextSection = styled.div`
	width: 100%;
	height: 500px;
	background-color: transparent;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 32px;
	padding-right: 60px;

	@media (max-width: 800px) {
		flex-direction: column;
		margin: auto;
	}
`

export const WelcomeTextTitle = styled.h1`
	margin-top: 50px;
	background-color: transparent;
	font-family: Verdana, Sans-serif;
	font-size: 36px;
	font-weight: normal;

	@media (max-width: 800px) {
		flex-direction: column;
		margin: auto;
		font-size: 24px;
	}
`
export const WelcomeTextContent = styled.h2`
	background-color: transparent;
	font-family: Verdana, Sans-serif;
	font-size: 28px;
	font-weight: normal;
`
export const ButtonsSection = styled.div`
	width: 100%;
	height: 150px;
	background-color: transparent;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const IconButton = styled.a`
	width: 50px;
	height: 50px;
	border: none;
	border-radius: 15px;
	box-shadow: 4px 5px 4px rgba(0, 0, 0, 0.25);
	margin: 30px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #1e3461;
	z-index: 1;

	&:hover {
		background-color: black;
		opacity: 0.7;
	}

	@media (max-width: 800px) {
		flex-direction: column;
	}
`

const iconStyle = (icon) => {
	return styled(icon)`
		color: white;
		font-size: 20px;
		transform: scale(1.2);
	`
}

export const InstagramIcon = iconStyle(Instagram)
export const FacebookIcon = iconStyle(Facebook)
export const TwitterIcon = iconStyle(Twitter)
export const LinkedInIcon = iconStyle(LinkedIn)
