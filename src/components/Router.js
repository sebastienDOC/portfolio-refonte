import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Accueil from "../pages/Accueil/Accueil";
import Projets from "../pages/Projets/Projets";
import ProjetDetail from "../pages/Projets/ProjetDetail/ProjetDetail";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Confidentialité from "../pages/Confidentialité/Confidentialité";
import Mentions from "../pages/Mentions/Mentions";
import Cookies from "../pages/Cookies/Cookies";
import Error from "../pages/Error/Error";
import AnimationWrapper from "./AnimationWrapper/AnimationWrapper";

export default function Router() {
	const location = useLocation();

	return (
		<AnimatePresence mode="wait">
			<Routes
				location={location}
				key={location.pathname}
			>
				<Route
					path="/"
					element={
						<AnimationWrapper>
							<Accueil />
						</AnimationWrapper>
					}
				/>
				<Route
					path="/projets"
					element={
						<AnimationWrapper>
							<Projets />
						</AnimationWrapper>
					}
				/>
				<Route
					path="/projets/:id"
					element={
						<AnimationWrapper>
							<ProjetDetail />
						</AnimationWrapper>
					}
				/>
				<Route
					path="/about"
					element={
						<AnimationWrapper>
							<About />
						</AnimationWrapper>
					}
				/>
				<Route
					path="/contact"
					element={
						<AnimationWrapper>
							<Contact />
						</AnimationWrapper>
					}
				/>
				<Route
					path="/confidentialite"
					element={
						<AnimationWrapper>
							<Confidentialité />
						</AnimationWrapper>
					}
				/>
				<Route
					path="/mentions"
					element={
						<AnimationWrapper>
							<Mentions />
						</AnimationWrapper>
					}
				/>
				<Route
					path="/cookies"
					element={
						<AnimationWrapper>
							<Cookies />
						</AnimationWrapper>
					}
				/>
				{/* <Route
					path="*"
					element={
						<AnimationWrapper>
							<Error />
						</AnimationWrapper>
					}
				/> */}
			</Routes>
		</AnimatePresence>
	);
}
