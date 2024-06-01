import React from "react";
import "./NavProjet.css";
import { Link } from "react-router-dom";

const NavProjet = () => {
	return (
		<div className="navprojet-ctn">
			<p className="navprojet-left">©/2024</p>
			<div className="navprojet-separate">
				<span></span>
			</div>
			<div className="navprojet-right">
				<Link
					to="/projets"
					className="conf-btn"
				>
					Projets
				</Link>
			</div>
		</div>
	);
};

export default NavProjet;
