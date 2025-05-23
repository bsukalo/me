import React, { useContext } from "react";
import "./SplashScreen.scss";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import { greeting, splashScreen } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function SplashScreen() {
	const { isDark } = useContext(StyleContext);
	return (
		<div
			className={
				isDark ? "dark-mode splash-container" : "splash-container"
			}
		>
			<div className="splash-animation-container">
				<DisplayLottie animationData={splashScreen.animation} />
			</div>
			<div className="splash-title-container">
				<span
					className={
						isDark
							? "angle-bracket angle-bracket-dark"
							: "angle-bracket"
					}
				>
					{" "}
					&lt;
				</span>
				<span
					className={
						isDark
							? "splash-title splash-title-dark"
							: "splash-title"
					}
				>
					{greeting.username}
				</span>
				<span
					className={
						isDark
							? "angle-bracket angle-bracket-dark"
							: "angle-bracket"
					}
				>
					/&gt;
				</span>
			</div>
		</div>
	);
}
