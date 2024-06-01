import React from "react";
import "./Accueil.css";
import linkedin from "../../assets/contact/linkedin.webp";
import github from "../../assets/contact/github.webp";
import logo2 from "../../assets/logo/logo2.png";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";

const Accueil = () => {
	return (
		<div className="main-ctn">
			<div className="container">
				<div className="container-logo">
					<img
						src={logo2}
						alt="Logo de l'entreprise"
						className="container-logo-img"
					/>
				</div>
				<h1 className="container-title">SÉBASTIEN DECHAND</h1>
				<br />
				<p>
					Développeur Web Front-End certifié basé à Dijon. <br />
				</p>
				<p>Développement web sur mesure pour les PME, TPE et particuliers.</p>
			</div>
			<ul className="container-list">
				<li>
					<Link
						to="/projets"
						className="container-sub"
					>
						PROJETS
					</Link>
					<div className="underline"></div>
				</li>
				<li>
					<Link
						to="/about"
						className="container-sub"
					>
						À PROPOS
					</Link>
					<div className="underline"></div>
				</li>
				<li>
					<Link
						to="/contact"
						className="container-sub"
					>
						CONTACT
					</Link>
					<div className="underline"></div>
				</li>
			</ul>

			<Navbar />
		</div>
	);
};

export default Accueil;
