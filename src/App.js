import React, { useRef, useEffect } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import fond from "./assets/photo/fond2.mov";
import Rooter from "./components/Router";
import { ElfsightWidget } from "react-elfsight-widget";

export default function App() {
	const videoRef = useRef(null);

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.playbackRate = 0.65; // Définir la vitesse de lecture à 0.5
		}
	}, []);

	return (
		<BrowserRouter>
			<div id="main">
				<ElfsightWidget
					widgetId="a5142191-17bd-4a6e-a41f-e3e7bdb0f3a0"
					lazy
					modern
					className="rating"
				/>
				<div className="bg">
					<video
						ref={videoRef}
						src={fond}
						autoPlay
						loop
						muted
						alt="Des vagues dans l'océan"
						type="video/mov"
					/>
					<Rooter />
				</div>
			</div>
		</BrowserRouter>
	);
}
