import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StartupProjects from "./StartupProjects/StartupProject.js";
import Footer from "../components/footer/Footer";
import ScrollToTopButton from "./topbutton/Top";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import { splashScreen } from "../portfolio";
import { StyleProvider } from "../contexts/StyleContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import "./Main.scss";

const Main = () => {
	const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
	const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
	const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
		useState(true);

	useEffect(() => {
		if (splashScreen.enabled) {
			const splashTimer = setTimeout(
				() => setIsShowingSplashAnimation(false),
				splashScreen.duration
			);
			return () => {
				clearTimeout(splashTimer);
			};
		}
	}, []);

	const changeTheme = () => {
		setIsDark(!isDark);
	};

	return (
		<div className={isDark ? "dark-mode" : null}>
			<StyleProvider value={{ isDark: isDark, changeTheme: changeTheme }}>
				{isShowingSplashAnimation && splashScreen.enabled ? (
					<SplashScreen />
				) : (
					<>
						<div className="content">
							<Header />
							<Greeting />
							<Skills />
							<StartupProjects />
							<Footer />
							<ScrollToTopButton />
						</div>
					</>
				)}
			</StyleProvider>
		</div>
	);
};

export default Main;
