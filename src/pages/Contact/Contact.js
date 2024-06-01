import React from "react";
import "./Contact.css";
import Navbar from "../../components/Navbar/Navbar";
import { motion } from "framer-motion";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";

const Contact = () => {
	return (
		<div className="contact-ctn">
			<motion.h1
				className="contact-title"
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
			>
				Bonjour.
			</motion.h1>
			<motion.p
				className="contact-txt"
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, ease: "easeOut", delay: 1 }}
			>
				Vous avez besoin d'un site internet bien structuré ? <br />
				Un site vitrine, un site e-commerce, un bon référencement ? <br />
				Contactez-moi !<br />
				<br />
			</motion.p>
			<motion.p
				className="contact-txt"
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, ease: "easeOut", delay: 1.3 }}
			>
				<a
					href="mailto:sebastiendechand@gmail.com"
					className="contact-social"
				>
					<i className="fa-solid fa-envelope"></i>
					sebastiendechand@gmail.com
				</a>{" "}
				<br />
				<a
					href="tel:+33623213815"
					className="contact-social"
				>
					<i className="fa-solid fa-phone"></i>
					+33 6.23.21.38.15
				</a>
			</motion.p>
			<motion.p
				className="contact-txt"
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, ease: "easeOut", delay: 1.6 }}
			>
				Sur internet :
				<a
					href="https://www.linkedin.com/in/s%C3%A9bastien-dechand-4653b5265/"
					target="_blank"
					rel="noreferrer"
					className="contact-social"
				>
					{" "}
					Linkedin{" "}
				</a>
				/
				<a
					href="https://github.com/sebastienDOC?tab=repositories"
					target="_blank"
					rel="noreferrer"
					className="contact-social"
				>
					{" "}
					Github{" "}
				</a>
				<br />
			</motion.p>
			<BurgerMenu />
			<Navbar />
		</div>
	);
};

export default Contact;
