import React from "react";
import "./ProjetList.css";

const ProjetList = ({ id, title, subtitle }) => {
	return (
		<div
			className="projets-list-ctn"
			key={id}
		>
			<h3 className="projets-list-title">
				<i className="fa-solid fa-arrow-right arrow"></i>
				{title}
			</h3>
			<p>{subtitle}</p>
			<div className="projets-separate"></div>
		</div>
	);
};

export default ProjetList;
