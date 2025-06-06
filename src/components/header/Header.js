import { useContext } from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import { greeting, skillsSection } from "../../portfolio";

function Header() {
	const { isDark } = useContext(StyleContext);
	const viewSkills = skillsSection.display;

	return (
		<Headroom>
			<header className={isDark ? "dark-menu header" : "header"}>
				<a href="/" className="logo">
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
					<span className="logo-name">{greeting.username}</span>
					<span
						className={
							isDark
								? "angle-bracket angle-bracket-dark"
								: "angle-bracket"
						}
					>
						/&gt;
					</span>
				</a>
				<input className="menu-btn" type="checkbox" id="menu-btn" />
				<label
					className="menu-icon"
					htmlFor="menu-btn"
					style={{ color: "white" }}
				>
					<span
						className={isDark ? "navicon navicon-dark" : "navicon"}
					></span>
				</label>
				<ul className={isDark ? "dark-menu menu" : "menu"}>
					{viewSkills && (
						<li>
							<a href="#">About</a>
						</li>
					)}
					{viewSkills && (
						<li>
							<a href="#skills">What I do</a>
						</li>
					)}
					{viewSkills && (
						<li>
							<a href="#projects">Projects</a>
						</li>
					)}

					<li>
						{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
						<a>
							<ToggleSwitch />
						</a>
					</li>
				</ul>
			</header>
		</Headroom>
	);
}
export default Header;
