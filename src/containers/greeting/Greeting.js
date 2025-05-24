import React, { useContext } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { illustration, greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
	const { isDark } = useContext(StyleContext);
	if (!greeting.displayGreeting) {
		return null;
	}
	return (
		<Fade bottom duration={1000} distance="40px">
			<div className="greet-main" id="greeting">
				<div className="greeting-main">
					<div className="greeting-text-div">
						<div>
							<h1
								className={
									isDark
										? "dark-mode greeting-text"
										: "greeting-text"
								}
							>
								{" "}
								{greeting.title}{" "}
								<span className="rocket-emoji">
									{emoji("🚀")}
								</span>
							</h1>
							<p
								className={
									isDark
										? "dark-mode greeting-text-p"
										: "greeting-text-p subTitle"
								}
							>
								{greeting.subTitle}
							</p>
							<p2
								className={
									isDark
										? "dark-mode greeting-text-p2"
										: "greeting-text-p2 subTitle"
								}
							>
								{greeting.subTitle2}
							</p2>
							<div id="resume" className="empty-div"></div>
							<div className="button-greeting-div">
								{greeting.resumeLinkENG && (
									<a
										href={greeting.resumeLinkENG}
										download="resune_ENG.pdf"
										className="download-link-button"
									>
										<Button text="See my resume (ENG)" />
									</a>
								)}
								{greeting.resumeLinkBIH && (
									<a
										href={greeting.resumeLinkBIH}
										download="resume_BIH.pdf"
										className="download-link-button"
									>
										<Button text="See my resume (BIH)" />
									</a>
								)}
							</div>
							<SocialMedia />
						</div>
					</div>
					<div className="greeting-image-div">
						{illustration.animated ? (
							<DisplayLottie animationData={landingPerson} />
						) : (
							<img
								alt="man sitting on table"
								src={require("../../assets/images/manOnTable.svg")}
							></img>
						)}
					</div>
				</div>
			</div>
		</Fade>
	);
}
