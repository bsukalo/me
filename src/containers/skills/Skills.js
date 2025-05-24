import { React, useContext } from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skillsSection } from "../../portfolio";
import { Reveal } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
	const { isDark } = useContext(StyleContext);
	if (!skillsSection.display) {
		return null;
	}
	return (
		<div className={isDark ? "dark-mode main" : "main"} id="skills">
			<div className="skills-text-div">
				<h1
					className={
						isDark ? "dark-mode skills-heading" : "skills-heading"
					}
				>
					{skillsSection.title}{" "}
				</h1>
				<p
					className={
						isDark
							? "dark-mode subTitle skills-text-subtitle"
							: "subTitle skills-text-subtitle"
					}
				>
					{skillsSection.subTitle}
				</p>
				<SoftwareSkill />
				<Reveal left duration={1400}>
					<div className="skills-main-div">
						<div>
							{skillsSection.skillsLeft.map((skills, i) => {
								return (
									<p
										key={i}
										className={
											isDark
												? "dark-mode subTitle skills-text"
												: "subTitle skills-text"
										}
									>
										{skills}
									</p>
								);
							})}
						</div>
						<div>
							{skillsSection.skillsRight.map((skills, i) => {
								return (
									<p
										key={i}
										className={
											isDark
												? "dark-mode subTitle skills-text"
												: "subTitle skills-text"
										}
									>
										{skills}
									</p>
								);
							})}
						</div>
					</div>
				</Reveal>
			</div>
		</div>
	);
}
