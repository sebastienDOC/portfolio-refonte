import React from "react";
import "./SkillsList.css";

const SkillsList = ({ skills }) => {
	function getImgCover(img) {
		let images = require("../../assets/skills" + img);
		return images;
	}
	return (
		<div className="skills-list">
			{skills.map((skill) => (
				<div
					key={skill.name}
					className="skill-item"
				>
					{skill.logo ? (
						<img
							src={getImgCover(skill.logo)}
							alt={skill.name}
							className="skill-logo"
						/>
					) : (
						""
					)}
					<p>{skill.name}</p>
				</div>
			))}
		</div>
	);
};

export default SkillsList;
