import React from "react"
import styled from "styled-components"
import Instagram from "@material-ui/icons/Instagram"
import Facebook from "@material-ui/icons/Facebook"
import Twitter from "@material-ui/icons/Twitter"
import LinkedIn from "@material-ui/icons/LinkedIn"
import Picture from "../../assets/me.png"
import Squares from "../../assets/squares.svg"

const WelcomeSection = styled.section`
	width: 100%;
	height: 500px;
	background-color: transparent;
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-top: 150px;
	position: relative;
`

const MyPhotoSection = styled.div`
	position: relative;
	width: 100%;
	height: 500px;
	background-color: transparent;
	display: flex;
	align-items: flex-end;
	justify-content: center;
`
const MyPhoto = styled.img`
	height: 525px;
	background-color: transparent;
	z-index: 2;
	position: absolute;
`

const PhotoSquares = styled.img`
	background-color: transparent;
	position: absolute;
	height: 590px;
	margin-left: 80px;
	margin-bottom: -55px;
	z-index: 1;
`

const WelcomeTextSection = styled.div`
	width: 100%;
	height: 500px;
	background-color: transparent;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 32px;
	padding-right: 60px;
`

const WelcomeTextTitle = styled.h1`
	margin-top: 50px;
	background-color: transparent;
	font-family: Verdana, Sans-serif;
	font-size: 36px;
	font-weight: normal;
`
const WelcomeTextContent = styled.h2`
	background-color: transparent;
	font-family: Verdana, Sans-serif;
	font-size: 28px;
	font-weight: normal;
`
const ButtonsSection = styled.div`
	width: 100%;
	height: 150px;
	background-color: transparent;
	display: flex;
	align-items: center;
	justify-content: center;
`

const IconButton = styled.a`
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
`

const iconStyle = (icon) => {
	return styled(icon)`
		color: white;
		font-size: 20px;
		transform: scale(1.2);
	`
}

const InstagramIcon = iconStyle(Instagram)
const FacebookIcon = iconStyle(Facebook)
const TwitterIcon = iconStyle(Twitter)
const LinkedInIcon = iconStyle(LinkedIn)

function Home() {
	return (
		<>
			{" "}
			<WelcomeSection>
				<MyPhotoSection>
					<PhotoSquares src={Squares} />
					<MyPhoto src={Picture} />
				</MyPhotoSection>
				<WelcomeTextSection>
					<WelcomeTextTitle>HI, I'M PEDRO ARAUJO</WelcomeTextTitle>
					<WelcomeTextContent>
						Welcome to my space on the internet.
					</WelcomeTextContent>
					<h2 style={{ color: "red" }}>Under construction</h2>
					<ButtonsSection>
						<IconButton
							href="https://www.instagram.com/ped_araujo/"
							target="_blank"
						>
							<InstagramIcon />
						</IconButton>
						<IconButton href="https://www.facebook.com/p3d90/" target="_blank">
							<FacebookIcon />
						</IconButton>
						<IconButton href="https://twitter.com/ped_araujo" target="_blank">
							<TwitterIcon />
						</IconButton>
						<IconButton
							href="https://www.linkedin.com/in/pedaraujo/"
							target="_blank"
						>
							<LinkedInIcon />
						</IconButton>
					</ButtonsSection>
				</WelcomeTextSection>
			</WelcomeSection>
		</>
	)
}

export default Home
