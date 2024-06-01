import React, { useState, useEffect } from "react";
import "./Carousel.css";
import { motion } from "framer-motion";

function Carousel({ data }) {
	const [slide, setSlide] = useState(0);
	const [isPaused, setIsPaused] = useState(false);

	const nextSlide = () => {
		setSlide(slide === data.length - 1 ? 0 : slide + 1);
	};
	const prevSlide = () => {
		setSlide(slide === 0 ? data.length - 1 : slide - 1);
	};
	const showNavigate = data.length > 1;

	const togglePause = () => {
		setIsPaused(!isPaused);
	};

	function getImgCover(img) {
		let images = require("../../assets/pictures/" + img);
		return images;
	}

	// useEffect for autoplay
	useEffect(() => {
		if (!isPaused) {
			const interval = setInterval(() => {
				nextSlide();
			}, 5000); // Change slide every 3 seconds

			return () => {
				clearInterval(interval); // Clean up the interval on component unmount
			};
		}
	}, [slide, isPaused]);

	return (
		<motion.div
			className="carousel_banner"
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, ease: "easeOut", delay: 4 }}
			onClick={togglePause}
		>
			{data.map((image, id) => {
				return (
					<img
						src={getImgCover(image)}
						alt={image}
						key={id}
						className={slide === id ? "carousel_picture" : "carousel_picture hidden"}
					/>
				);
			})}
			{showNavigate && (
				<span className="points">
					{data.map((_, id) => {
						return (
							<button
								key={id}
								onClick={(e) => {
									e.stopPropagation();
									setSlide(id);
								}}
								className={slide === id ? "point" : "point inactif"}
							></button>
						);
					})}
				</span>
			)}
		</motion.div>
	);
}

export default Carousel;
