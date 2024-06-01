// AnimationWrapper.js
import { motion } from "framer-motion";

const pageVariants = {
	initial: {
		opacity: 0,
		y: "-100vh", // Arrive par le haut
	},
	in: {
		opacity: 1,
		y: 0, // Position finale
	},
	out: {
		opacity: 0,
		y: "-100vh", // Sort par le haut
	},
};

const pageTransition = {
	type: "tween",
	ease: "anticipate",
	duration: 0.5,
};

const AnimationWrapper = ({ children }) => (
	<motion.div
		initial="initial"
		animate="in"
		exit="out"
		variants={pageVariants}
		transition={pageTransition}
		className="relative"
	>
		{children}
	</motion.div>
);

export default AnimationWrapper;
