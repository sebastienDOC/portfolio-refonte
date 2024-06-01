import React from "react";
import "./Projets.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import projetsData from "../../data/projets.json";
import ProjetList from "./ProjetList/ProjetList";
import Navbar from "../../components/Navbar/Navbar";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";

const Projets = () => {
	const variants = {
		hidden: { opacity: 0, x: 50 },
		visible: (i) => ({
			opacity: 1,
			x: 0,
			transition: {
				delay: i * 0.3,
			},
		}),
	};

	return (
		<div className="projets-container">
			<div className="projets-left">
				<motion.h2
					className="projets-title"
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
				>
					PROJETS
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
				>
					Vous découvrirez des projets réalisés pendant ma formation et d'autres
					projets professionnels. <br />
				</motion.p>
				<br />
				<motion.p
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, ease: "easeOut", delay: 1.3 }}
				>
					Ma maitrise des langages de développement du HTML, CSS 3, ReactJS, Redux,
					Sass, Javascript vous garantit des applications rapides, bien structurées,
					responsive et optimisé pour les moteurs de recherche. <br />
				</motion.p>
			</div>

			<div className="projets-right">
				{projetsData[0].formation.map((data, index) => (
					<motion.div
						key={data.id}
						initial="hidden"
						animate="visible"
						custom={index}
						variants={variants}
					>
						<Link
							to={`/projets/${data.id}`}
							className="projets-right-link"
						>
							<ProjetList
								title={data.title}
								subtitle={data.subtitle}
								projetId={data.id}
								id={data.id}
							/>
						</Link>
					</motion.div>
				))}
			</div>

			<BurgerMenu />

			<Navbar />
		</div>
	);
};

export default Projets;
